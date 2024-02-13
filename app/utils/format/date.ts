import { Locale, differenceInDays, format, parseISO } from "date-fns";
import { formatDistanceWithOptions } from "date-fns/fp";
// import I18n from "i18n-js"

import en from "date-fns/locale/en-US";

type Options = Parameters<typeof format>[2];

export interface DateRange {
  startDate: string;
  endDate: string;
  numDate: number;
}

export interface DateWeekRange {
  month: string;
  dates: [];
}

const getLocale = (): Locale => {
  // const locale = I18n.currentLocale().split("-")[0]
  return en;
};

export const formatDate = (
  date: string,
  dateFormat?: string,
  options?: Options,
) => {
  const locale = getLocale();
  const dateOptions = {
    ...options,
    locale,
  };
  return format(parseISO(date), dateFormat ?? "MMM dd, yyyy", dateOptions);
};

// humanizeDuration
export const humanize = (date: string) => {
  return formatDistanceWithOptions({ addSuffix: true })(
    new Date(),
    new Date(date),
  );
};

// humenizeToDate
export const humanizeToDate = (date: string, days = 2, dateFormat?: string) => {
  if (!date) {
    return "";
  }
  const distanceDays = differenceInDays(new Date(), new Date(date));
  if (distanceDays <= days) {
    return humanize(date);
  }
  return formatDate(date, dateFormat);
};

export const getListDateFromMonth = (month: number, year: number) => {
  const date = new Date(year, month, 1);
  const dates: DateRange[] = [];

  let numDate = 0;
  while (date.getMonth() === month) {
    // example: startDate: 2020-11-31T16:00:00.000Z endDate: 2020-12-01T16:00:00.000Z numDate: 1
    numDate++;
    dates.push({
      startDate: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      ).toISOString(),
      endDate: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 1,
      ).toISOString(),
      numDate: numDate,
    });
    date.setDate(date.getDate() + 1);
  }
  return dates;
};

export const getListDateFromWeek = (month: number, year: number) => {
  const listMonth = getListDateFromMonth(month, year);
  const dates = [];
  const listSelectedDate = [7, 14, 21, 28];
  listSelectedDate.map(value => {
    const lastWeek = new Date(
      listMonth.find(item => item.numDate === value)?.endDate,
    );

    const startDate = new Date(
      lastWeek.getFullYear(),
      lastWeek.getMonth(),
      lastWeek.getDate() - 7,
    ).toISOString();

    const endDate = new Date(
      lastWeek.getFullYear(),
      lastWeek.getMonth(),
      lastWeek.getDate() - 1,
    ).toISOString();

    return dates.push({
      startDate: startDate,
      endDate: endDate,
    });
  });

  return dates;
};
