// import { CountryCodeType } from "_services/consts";
import { parsePhoneNumberWithError } from "libphonenumber-js";

export const renderCallingCode = (callingCode?: string, phone?: string) => {
  if (callingCode && phone) {
    return `+${callingCode}${phone}`;
  }

  if (callingCode) {
    return `+${callingCode}`;
  }

  return "";
};

export const sanitizePhoneNumber = (phone: string) => {
  if (phone.startsWith("08")) {
    return phone.substring(1);
  }

  return phone;
};

export const renderMaskPhoneNumber = (
  phoneNumber?: string,
  defaultValue?: string,
) => {
  if (!phoneNumber) {
    return defaultValue ?? "";
  }

  const formattedPhoneNumber = phoneNumber.startsWith("+")
    ? phoneNumber
    : `+${phoneNumber}`;
  try {
    return parsePhoneNumberWithError(
      formattedPhoneNumber,
    ).formatInternational();
  } catch (error) {
    return phoneNumber;
  }
};

export const normalizePhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) {
    return "";
  }

  if (phoneNumber.startsWith("+")) {
    return phoneNumber;
  }

  return `+${phoneNumber}`;
};

// export const renderCountryCode = (phoneNumber?: string): CountryCodeType => {
//   if (!phoneNumber) {
//     return "SG" as CountryCodeType;
//   }

//   try {
//     return parsePhoneNumberWithError(phoneNumber).country as CountryCodeType;
//   } catch (error) {
//     return "SG" as CountryCodeType;
//   }
// };
