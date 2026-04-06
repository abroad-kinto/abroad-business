import { z } from 'zod';

export const businessDetailsSchema = z.object({
  legalCompanyName: z.string().min(2, 'Legal company name is required'),
  idCompanyNumber: z.string().min(3, 'Company ID number is required'),
  websiteLink: z.string().min(5, 'Valid website URL is required'),
  businessModel: z.string().min(10, 'Please describe the business model'),
  countriesOfOperation: z.string().min(1, 'At least one country is required'),
  countryOfRegistration: z.string().min(1, 'Country of registration is required'),
});

export const ownershipPersonSchema = z.object({
  status: z.enum(['person', 'organization']),
  fullName: z.string().min(2, 'Full name is required'),
  role: z.string().min(1, 'Role is required'),
  ownershipPercentage: z.string().refine(
    (val) => {
      const num = parseFloat(val.replace('%', ''));
      return !isNaN(num) && num >= 0 && num <= 100;
    },
    { message: 'Must be a number between 0 and 100' }
  ),
});

export const regulatorySchema = z.object({
  regulatoryPenalties: z.string().optional().or(z.literal('')),
  kycFlowDocument: z.any().nullable(),
  originOfFunds: z.string().min(10, 'Please describe the origin of funds'),
  amlPolicy: z.any().nullable(),
  licenseRequirement: z.string().min(1, 'Please select an option'),
  licenseExplanation: z.string().optional().or(z.literal('')),
});

export const businessActivitiesSchema = z.object({
  highRiskJurisdictions: z.string().optional().or(z.literal('')),
  expectedTransactionVolume: z.string().min(1, 'Expected transaction volume is required'),
  geographicAreaOfActivities: z.string().min(1, 'Geographic area is required'),
  financialStatements: z.any().nullable(),
});

export const fullKybSchema = z.object({
  businessDetails: businessDetailsSchema,
  ownership: z.array(ownershipPersonSchema).min(1, 'At least one person must be added'),
  regulatory: regulatorySchema,
  businessActivities: businessActivitiesSchema,
});

export type BusinessDetailsInput = z.infer<typeof businessDetailsSchema>;
export type OwnershipPersonInput = z.infer<typeof ownershipPersonSchema>;
export type RegulatoryInput = z.infer<typeof regulatorySchema>;
export type BusinessActivitiesInput = z.infer<typeof businessActivitiesSchema>;
