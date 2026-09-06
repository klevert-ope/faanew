import { site } from "../content/site";

export type SeoPageType = "WebPage" | "ContactPage" | "AboutPage" | "CollectionPage";

export type Breadcrumb = {
  name: string;
  path: string;
};

export function formatPageTitle(title: string): string {
  if (title.includes("Fleet Associates")) {
    return title;
  }
  return `${title} · Fleet Associates Africa`;
}

export function canonicalPath(pathname: string): string {
  if (pathname === "/" || pathname === "") {
    return "/";
  }
  return pathname.replace(/\/+$/, "");
}

export function absoluteUrl(path: string, siteUrl: string = site.url): string {
  const base = siteUrl.replace(/\/+$/, "");
  const normalized = canonicalPath(path);
  if (normalized === "/") {
    return `${base}/`;
  }
  return `${base}${normalized.startsWith("/") ? normalized : `/${normalized}`}`;
}

export function breadcrumbsForPath(pathname: string, pageTitle: string): Breadcrumb[] {
  const path = canonicalPath(pathname);
  const crumbs: Breadcrumb[] = [{ name: "Home", path: "/" }];

  if (path === "/") {
    return crumbs;
  }

  if (path === "/fleet-solutions" || path === "/industrial-solutions") {
    crumbs.push({ name: "Services", path: "/services" });
  }

  crumbs.push({ name: pageTitle, path });
  return crumbs;
}

function schemaType(pageType: SeoPageType): SeoPageType {
  switch (pageType) {
    case "WebPage":
    case "ContactPage":
    case "AboutPage":
    case "CollectionPage":
      return pageType;
    default: {
      const _exhaustive: never = pageType;
      return _exhaustive;
    }
  }
}

export function buildStructuredData(input: {
  title: string;
  description: string;
  canonical: string;
  pathname: string;
  image: string;
  pageType?: SeoPageType;
}): Record<string, unknown> {
  const pageType = schemaType(input.pageType ?? "WebPage");
  const organizationId = `${site.url}/#organization`;
  const websiteId = `${site.url}/#website`;
  const webpageId = `${input.canonical}#webpage`;
  const crumbs = breadcrumbsForPath(input.pathname, input.title);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": organizationId,
        name: site.name,
        legalName: site.legalName,
        url: `${site.url}/`,
        logo: absoluteUrl(site.logo),
        image: input.image,
        email: site.email,
        telephone: site.phones.map((phone) => phone.href.replace("tel:", "")),
        foundingDate: String(site.founded),
        areaServed: site.region,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.streetAddress,
          addressLocality: site.locality,
          postalCode: site.postalCode,
          addressCountry: site.country,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+254728764014",
          email: site.email,
          contactType: "customer service",
          areaServed: "Africa",
          availableLanguage: ["en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${site.url}/`,
        name: site.name,
        description: site.defaultDescription,
        inLanguage: "en",
        publisher: { "@id": organizationId },
      },
      {
        "@type": pageType,
        "@id": webpageId,
        url: input.canonical,
        name: input.title,
        description: input.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        primaryImageOfPage: input.image,
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: absoluteUrl(crumb.path),
        })),
      },
    ],
  };
}
