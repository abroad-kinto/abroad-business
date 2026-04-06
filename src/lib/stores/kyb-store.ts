import { writable, derived, type Writable } from 'svelte/store';
import type {
  BusinessDetails,
  OwnershipPerson,
  CorporateDocuments,
  RegulatoryData,
  BusinessActivities,
  KybProgress,
} from '$lib/types/kyb';

function createDefaultCorporateDocuments(): CorporateDocuments {
  return {
    certificateOfIncorporation: [],
    articlesOfAssociation: [],
    proofOfAddress: [],
    corporateTaxCertification: [],
  };
}

function createDefaultRegulatory(): RegulatoryData {
  return {
    regulatoryPenalties: '',
    kycFlowDocument: null,
    originOfFunds: '',
    amlPolicy: null,
    licenseRequirement: '',
    licenseExplanation: '',
  };
}

function createDefaultActivities(): BusinessActivities {
  return {
    highRiskJurisdictions: '',
    expectedTransactionVolume: '',
    geographicAreaOfActivities: '',
    financialStatements: null,
  };
}

function createDefaultProgress(): KybProgress {
  return { business: 0, documents: 0, ownership: 0, regulatory: 0, activities: 0 };
}

export interface KybState {
  businessDetails: Partial<BusinessDetails>;
  corporateDocuments: CorporateDocuments;
  ownership: OwnershipPerson[];
  regulatory: RegulatoryData;
  businessActivities: BusinessActivities;
  progress: KybProgress;
  submitted: boolean;
}

function createKybStore(): Writable<KybState> {
  const { subscribe, set, update } = writable<KybState>({
    businessDetails: {},
    corporateDocuments: createDefaultCorporateDocuments(),
    ownership: [],
    regulatory: createDefaultRegulatory(),
    businessActivities: createDefaultActivities(),
    progress: createDefaultProgress(),
    submitted: false,
  });

  return {
    subscribe,
    set,
    update,
  };
}

export const kybStore = createKybStore();

export const kybSubmitted = derived(
  kybStore,
  ($store) => $store.submitted
);
