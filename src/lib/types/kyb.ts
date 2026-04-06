// KYB Form Types

export interface BusinessDetails {
  legalCompanyName: string;
  idCompanyNumber: string;
  websiteLink: string;
  businessModel: string;
  countriesOfOperation: string;
  countryOfRegistration: string;
}

export interface DocumentUpload {
  name: string;
  files: File[];
}

export interface CorporateDocuments {
  certificateOfIncorporation: File[];
  articlesOfAssociation: File[];
  corporateTaxCertification: File[];
  proofOfAddress: File[];
}

export type EntityType = 'person' | 'organization';

export interface OwnershipPerson {
  id: string;
  status: EntityType;
  fullName: string;
  role: string;
  ownershipPercentage: string;
  kycVerificationLink: string;
  kycStatus: 'approved' | 'pending' | 'not_sent';
}

export interface RegulatoryData {
  regulatoryPenalties: string;
  kycFlowDocument: File | null;
  originOfFunds: string;
  amlPolicy: File | null;
  licenseRequirement: string;
  licenseExplanation: string;
}

export interface BusinessActivities {
  highRiskJurisdictions: string;
  expectedTransactionVolume: string;
  geographicAreaOfActivities: string;
  financialStatements: File | null;
}

export interface KybFormData {
  businessDetails: BusinessDetails;
  corporateDocuments: CorporateDocuments;
  ownership: OwnershipPerson[];
  regulatory: RegulatoryData;
  businessActivities: BusinessActivities;
}

export type KybSection = 'business' | 'documents' | 'ownership' | 'regulatory' | 'activities' | 'confirmation';

export interface KybProgress {
  business: number;
  documents: number;
  ownership: number;
  regulatory: number;
  activities: number;
}
