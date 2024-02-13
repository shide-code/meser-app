import "intl";
import "intl/locale-data/jsonp/en-SG";
import "intl/locale-data/jsonp/id-ID";

export const formatCurrency = (
  val: number,
  lang?: string,
  currency?: string,
  options?: Intl.NumberFormatOptions,
): string => {
  if (!val) {
    return "$0";
  }

  return new Intl.NumberFormat(lang ?? "en-SG", {
    style: "currency",
    currency: currency ?? "SGD",
    minimumFractionDigits: 0,
    ...options,
  }).format(val);
};

// make 1000 => 1.000
// make 1000.5 => 1.000,5
export const formatNumber = (val: number, lang?: string): string =>
  new Intl.NumberFormat(lang ?? "en-SG").format(val);

export const minimValue = (val: number): number => {
  if (val <= 0) {
    return 0;
  }
  return val;
};
