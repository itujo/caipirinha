import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  DateTime: any;
  Decimal: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateCity = {
  __typename?: 'AggregateCity';
  _avg?: Maybe<CityAvgAggregate>;
  _count?: Maybe<CityCountAggregate>;
  _max?: Maybe<CityMaxAggregate>;
  _min?: Maybe<CityMinAggregate>;
  _sum?: Maybe<CitySumAggregate>;
};

export type AggregateCompany = {
  __typename?: 'AggregateCompany';
  _avg?: Maybe<CompanyAvgAggregate>;
  _count?: Maybe<CompanyCountAggregate>;
  _max?: Maybe<CompanyMaxAggregate>;
  _min?: Maybe<CompanyMinAggregate>;
  _sum?: Maybe<CompanySumAggregate>;
};

export type AggregateCredits = {
  __typename?: 'AggregateCredits';
  _avg?: Maybe<CreditsAvgAggregate>;
  _count?: Maybe<CreditsCountAggregate>;
  _max?: Maybe<CreditsMaxAggregate>;
  _min?: Maybe<CreditsMinAggregate>;
  _sum?: Maybe<CreditsSumAggregate>;
};

export type AggregateDebits = {
  __typename?: 'AggregateDebits';
  _avg?: Maybe<DebitsAvgAggregate>;
  _count?: Maybe<DebitsCountAggregate>;
  _max?: Maybe<DebitsMaxAggregate>;
  _min?: Maybe<DebitsMinAggregate>;
  _sum?: Maybe<DebitsSumAggregate>;
};

export type AggregateFile = {
  __typename?: 'AggregateFile';
  _avg?: Maybe<FileAvgAggregate>;
  _count?: Maybe<FileCountAggregate>;
  _max?: Maybe<FileMaxAggregate>;
  _min?: Maybe<FileMinAggregate>;
  _sum?: Maybe<FileSumAggregate>;
};

export type AggregateMovement = {
  __typename?: 'AggregateMovement';
  _avg?: Maybe<MovementAvgAggregate>;
  _count?: Maybe<MovementCountAggregate>;
  _max?: Maybe<MovementMaxAggregate>;
  _min?: Maybe<MovementMinAggregate>;
  _sum?: Maybe<MovementSumAggregate>;
};

export type AggregatePostalCard = {
  __typename?: 'AggregatePostalCard';
  _avg?: Maybe<PostalCardAvgAggregate>;
  _count?: Maybe<PostalCardCountAggregate>;
  _max?: Maybe<PostalCardMaxAggregate>;
  _min?: Maybe<PostalCardMinAggregate>;
  _sum?: Maybe<PostalCardSumAggregate>;
};

export type AggregatePostingUnit = {
  __typename?: 'AggregatePostingUnit';
  _avg?: Maybe<PostingUnitAvgAggregate>;
  _count?: Maybe<PostingUnitCountAggregate>;
  _max?: Maybe<PostingUnitMaxAggregate>;
  _min?: Maybe<PostingUnitMinAggregate>;
  _sum?: Maybe<PostingUnitSumAggregate>;
};

export type AggregateService = {
  __typename?: 'AggregateService';
  _avg?: Maybe<ServiceAvgAggregate>;
  _count?: Maybe<ServiceCountAggregate>;
  _max?: Maybe<ServiceMaxAggregate>;
  _min?: Maybe<ServiceMinAggregate>;
  _sum?: Maybe<ServiceSumAggregate>;
};

export type AggregateState = {
  __typename?: 'AggregateState';
  _avg?: Maybe<StateAvgAggregate>;
  _count?: Maybe<StateCountAggregate>;
  _max?: Maybe<StateMaxAggregate>;
  _min?: Maybe<StateMinAggregate>;
  _sum?: Maybe<StateSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type BigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['BigInt']>;
  divide?: InputMaybe<Scalars['BigInt']>;
  increment?: InputMaybe<Scalars['BigInt']>;
  multiply?: InputMaybe<Scalars['BigInt']>;
  set?: InputMaybe<Scalars['BigInt']>;
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type BigIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBigIntFilter>;
  _min?: InputMaybe<NestedBigIntFilter>;
  _sum?: InputMaybe<NestedBigIntFilter>;
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type City = {
  __typename?: 'City';
  _count?: Maybe<CityCount>;
  createdAt: Scalars['DateTime'];
  destinationOriginCity: Array<Movement>;
  id: Scalars['Int'];
  movementsOriginCity: Array<Movement>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<State>;
  stateId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};


export type CityDestinationOriginCityArgs = {
  cursor?: InputMaybe<MovementWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovementScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovementOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovementWhereInput>;
};


export type CityMovementsOriginCityArgs = {
  cursor?: InputMaybe<MovementWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovementScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovementOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovementWhereInput>;
};

export type CityAvgAggregate = {
  __typename?: 'CityAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  stateId?: Maybe<Scalars['Float']>;
};

export type CityAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  stateId?: InputMaybe<SortOrder>;
};

export type CityCount = {
  __typename?: 'CityCount';
  destinationOriginCity: Scalars['Int'];
  movementsOriginCity: Scalars['Int'];
};

export type CityCountAggregate = {
  __typename?: 'CityCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  stateId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CityCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  stateId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CityCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  destinationOriginCity?: InputMaybe<MovementCreateNestedManyWithoutDestinationCityInput>;
  movementsOriginCity?: InputMaybe<MovementCreateNestedManyWithoutOriginCityInput>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<StateCreateNestedOneWithoutCitiesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  stateId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityCreateManyStateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityCreateManyStateInputEnvelope = {
  data: Array<CityCreateManyStateInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CityCreateNestedManyWithoutStateInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CityCreateOrConnectWithoutStateInput>>;
  create?: InputMaybe<Array<CityCreateWithoutStateInput>>;
  createMany?: InputMaybe<CityCreateManyStateInputEnvelope>;
};

export type CityCreateNestedOneWithoutDestinationOriginCityInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutDestinationOriginCityInput>;
  create?: InputMaybe<CityCreateWithoutDestinationOriginCityInput>;
};

export type CityCreateNestedOneWithoutMovementsOriginCityInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutMovementsOriginCityInput>;
  create?: InputMaybe<CityCreateWithoutMovementsOriginCityInput>;
};

export type CityCreateOrConnectWithoutDestinationOriginCityInput = {
  create: CityCreateWithoutDestinationOriginCityInput;
  where: CityWhereUniqueInput;
};

export type CityCreateOrConnectWithoutMovementsOriginCityInput = {
  create: CityCreateWithoutMovementsOriginCityInput;
  where: CityWhereUniqueInput;
};

export type CityCreateOrConnectWithoutStateInput = {
  create: CityCreateWithoutStateInput;
  where: CityWhereUniqueInput;
};

export type CityCreateWithoutDestinationOriginCityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movementsOriginCity?: InputMaybe<MovementCreateNestedManyWithoutOriginCityInput>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<StateCreateNestedOneWithoutCitiesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityCreateWithoutMovementsOriginCityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  destinationOriginCity?: InputMaybe<MovementCreateNestedManyWithoutDestinationCityInput>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<StateCreateNestedOneWithoutCitiesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityCreateWithoutStateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  destinationOriginCity?: InputMaybe<MovementCreateNestedManyWithoutDestinationCityInput>;
  movementsOriginCity?: InputMaybe<MovementCreateNestedManyWithoutOriginCityInput>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityGroupBy = {
  __typename?: 'CityGroupBy';
  _avg?: Maybe<CityAvgAggregate>;
  _count?: Maybe<CityCountAggregate>;
  _max?: Maybe<CityMaxAggregate>;
  _min?: Maybe<CityMinAggregate>;
  _sum?: Maybe<CitySumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  stateId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type CityListRelationFilter = {
  every?: InputMaybe<CityWhereInput>;
  none?: InputMaybe<CityWhereInput>;
  some?: InputMaybe<CityWhereInput>;
};

export type CityMaxAggregate = {
  __typename?: 'CityMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  stateId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  stateId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CityMinAggregate = {
  __typename?: 'CityMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  stateId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  stateId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CityOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CityOrderByWithAggregationInput = {
  _avg?: InputMaybe<CityAvgOrderByAggregateInput>;
  _count?: InputMaybe<CityCountOrderByAggregateInput>;
  _max?: InputMaybe<CityMaxOrderByAggregateInput>;
  _min?: InputMaybe<CityMinOrderByAggregateInput>;
  _sum?: InputMaybe<CitySumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  stateId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CityOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  destinationOriginCity?: InputMaybe<MovementOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  movementsOriginCity?: InputMaybe<MovementOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  state?: InputMaybe<StateOrderByWithRelationInput>;
  stateId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CityRelationFilter = {
  is?: InputMaybe<CityWhereInput>;
  isNot?: InputMaybe<CityWhereInput>;
};

export enum CityScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  StateId = 'stateId',
  UpdatedAt = 'updatedAt'
}

export type CityScalarWhereInput = {
  AND?: InputMaybe<Array<CityScalarWhereInput>>;
  NOT?: InputMaybe<Array<CityScalarWhereInput>>;
  OR?: InputMaybe<Array<CityScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  stateId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CityScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CityScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CityScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CityScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  stateId?: InputMaybe<IntNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CitySumAggregate = {
  __typename?: 'CitySumAggregate';
  id?: Maybe<Scalars['Int']>;
  stateId?: Maybe<Scalars['Int']>;
};

export type CitySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  stateId?: InputMaybe<SortOrder>;
};

export type CityUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  destinationOriginCity?: InputMaybe<MovementUpdateManyWithoutDestinationCityNestedInput>;
  movementsOriginCity?: InputMaybe<MovementUpdateManyWithoutOriginCityNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  state?: InputMaybe<StateUpdateOneWithoutCitiesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateManyWithWhereWithoutStateInput = {
  data: CityUpdateManyMutationInput;
  where: CityScalarWhereInput;
};

export type CityUpdateManyWithoutStateNestedInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CityCreateOrConnectWithoutStateInput>>;
  create?: InputMaybe<Array<CityCreateWithoutStateInput>>;
  createMany?: InputMaybe<CityCreateManyStateInputEnvelope>;
  delete?: InputMaybe<Array<CityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CityWhereUniqueInput>>;
  set?: InputMaybe<Array<CityWhereUniqueInput>>;
  update?: InputMaybe<Array<CityUpdateWithWhereUniqueWithoutStateInput>>;
  updateMany?: InputMaybe<Array<CityUpdateManyWithWhereWithoutStateInput>>;
  upsert?: InputMaybe<Array<CityUpsertWithWhereUniqueWithoutStateInput>>;
};

export type CityUpdateOneWithoutDestinationOriginCityNestedInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutDestinationOriginCityInput>;
  create?: InputMaybe<CityCreateWithoutDestinationOriginCityInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CityUpdateWithoutDestinationOriginCityInput>;
  upsert?: InputMaybe<CityUpsertWithoutDestinationOriginCityInput>;
};

export type CityUpdateOneWithoutMovementsOriginCityNestedInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutMovementsOriginCityInput>;
  create?: InputMaybe<CityCreateWithoutMovementsOriginCityInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CityUpdateWithoutMovementsOriginCityInput>;
  upsert?: InputMaybe<CityUpsertWithoutMovementsOriginCityInput>;
};

export type CityUpdateWithWhereUniqueWithoutStateInput = {
  data: CityUpdateWithoutStateInput;
  where: CityWhereUniqueInput;
};

export type CityUpdateWithoutDestinationOriginCityInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movementsOriginCity?: InputMaybe<MovementUpdateManyWithoutOriginCityNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  state?: InputMaybe<StateUpdateOneWithoutCitiesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateWithoutMovementsOriginCityInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  destinationOriginCity?: InputMaybe<MovementUpdateManyWithoutDestinationCityNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  state?: InputMaybe<StateUpdateOneWithoutCitiesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateWithoutStateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  destinationOriginCity?: InputMaybe<MovementUpdateManyWithoutDestinationCityNestedInput>;
  movementsOriginCity?: InputMaybe<MovementUpdateManyWithoutOriginCityNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpsertWithWhereUniqueWithoutStateInput = {
  create: CityCreateWithoutStateInput;
  update: CityUpdateWithoutStateInput;
  where: CityWhereUniqueInput;
};

export type CityUpsertWithoutDestinationOriginCityInput = {
  create: CityCreateWithoutDestinationOriginCityInput;
  update: CityUpdateWithoutDestinationOriginCityInput;
};

export type CityUpsertWithoutMovementsOriginCityInput = {
  create: CityCreateWithoutMovementsOriginCityInput;
  update: CityUpdateWithoutMovementsOriginCityInput;
};

export type CityWhereInput = {
  AND?: InputMaybe<Array<CityWhereInput>>;
  NOT?: InputMaybe<Array<CityWhereInput>>;
  OR?: InputMaybe<Array<CityWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  destinationOriginCity?: InputMaybe<MovementListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  movementsOriginCity?: InputMaybe<MovementListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  state?: InputMaybe<StateRelationFilter>;
  stateId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CityWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  _count?: Maybe<CompanyCount>;
  clientCode: Scalars['String'];
  cnpj: Scalars['String'];
  contractDr: Scalars['String'];
  contractNumber: Scalars['String'];
  createdAt: Scalars['DateTime'];
  files: Array<File>;
  id: Scalars['Int'];
  movements: Array<Movement>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type CompanyFilesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type CompanyMovementsArgs = {
  cursor?: InputMaybe<MovementWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovementScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovementOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovementWhereInput>;
};

export type CompanyAvgAggregate = {
  __typename?: 'CompanyAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CompanyAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CompanyCount = {
  __typename?: 'CompanyCount';
  files: Scalars['Int'];
  movements: Scalars['Int'];
};

export type CompanyCountAggregate = {
  __typename?: 'CompanyCountAggregate';
  _all: Scalars['Int'];
  clientCode: Scalars['Int'];
  cnpj: Scalars['Int'];
  contractDr: Scalars['Int'];
  contractNumber: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CompanyCountOrderByAggregateInput = {
  clientCode?: InputMaybe<SortOrder>;
  cnpj?: InputMaybe<SortOrder>;
  contractDr?: InputMaybe<SortOrder>;
  contractNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CompanyCreateInput = {
  clientCode: Scalars['String'];
  cnpj: Scalars['String'];
  contractDr: Scalars['String'];
  contractNumber: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  files?: InputMaybe<FileCreateNestedManyWithoutCompanyInput>;
  movements?: InputMaybe<MovementCreateNestedManyWithoutCenterOfCostInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CompanyCreateManyInput = {
  clientCode: Scalars['String'];
  cnpj: Scalars['String'];
  contractDr: Scalars['String'];
  contractNumber: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CompanyCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<CompanyCreateWithoutFilesInput>;
};

export type CompanyCreateNestedOneWithoutMovementsInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutMovementsInput>;
  create?: InputMaybe<CompanyCreateWithoutMovementsInput>;
};

export type CompanyCreateOrConnectWithoutFilesInput = {
  create: CompanyCreateWithoutFilesInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutMovementsInput = {
  create: CompanyCreateWithoutMovementsInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateWithoutFilesInput = {
  clientCode: Scalars['String'];
  cnpj: Scalars['String'];
  contractDr: Scalars['String'];
  contractNumber: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movements?: InputMaybe<MovementCreateNestedManyWithoutCenterOfCostInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CompanyCreateWithoutMovementsInput = {
  clientCode: Scalars['String'];
  cnpj: Scalars['String'];
  contractDr: Scalars['String'];
  contractNumber: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  files?: InputMaybe<FileCreateNestedManyWithoutCompanyInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CompanyGroupBy = {
  __typename?: 'CompanyGroupBy';
  _avg?: Maybe<CompanyAvgAggregate>;
  _count?: Maybe<CompanyCountAggregate>;
  _max?: Maybe<CompanyMaxAggregate>;
  _min?: Maybe<CompanyMinAggregate>;
  _sum?: Maybe<CompanySumAggregate>;
  clientCode: Scalars['String'];
  cnpj: Scalars['String'];
  contractDr: Scalars['String'];
  contractNumber: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CompanyMaxAggregate = {
  __typename?: 'CompanyMaxAggregate';
  clientCode?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  contractDr?: Maybe<Scalars['String']>;
  contractNumber?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyMaxOrderByAggregateInput = {
  clientCode?: InputMaybe<SortOrder>;
  cnpj?: InputMaybe<SortOrder>;
  contractDr?: InputMaybe<SortOrder>;
  contractNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CompanyMinAggregate = {
  __typename?: 'CompanyMinAggregate';
  clientCode?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  contractDr?: Maybe<Scalars['String']>;
  contractNumber?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyMinOrderByAggregateInput = {
  clientCode?: InputMaybe<SortOrder>;
  cnpj?: InputMaybe<SortOrder>;
  contractDr?: InputMaybe<SortOrder>;
  contractNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CompanyOrderByWithAggregationInput = {
  _avg?: InputMaybe<CompanyAvgOrderByAggregateInput>;
  _count?: InputMaybe<CompanyCountOrderByAggregateInput>;
  _max?: InputMaybe<CompanyMaxOrderByAggregateInput>;
  _min?: InputMaybe<CompanyMinOrderByAggregateInput>;
  _sum?: InputMaybe<CompanySumOrderByAggregateInput>;
  clientCode?: InputMaybe<SortOrder>;
  cnpj?: InputMaybe<SortOrder>;
  contractDr?: InputMaybe<SortOrder>;
  contractNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CompanyOrderByWithRelationInput = {
  clientCode?: InputMaybe<SortOrder>;
  cnpj?: InputMaybe<SortOrder>;
  contractDr?: InputMaybe<SortOrder>;
  contractNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  files?: InputMaybe<FileOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  movements?: InputMaybe<MovementOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
};

export enum CompanyScalarFieldEnum {
  ClientCode = 'clientCode',
  Cnpj = 'cnpj',
  ContractDr = 'contractDr',
  ContractNumber = 'contractNumber',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type CompanyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  clientCode?: InputMaybe<StringWithAggregatesFilter>;
  cnpj?: InputMaybe<StringWithAggregatesFilter>;
  contractDr?: InputMaybe<StringWithAggregatesFilter>;
  contractNumber?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CompanySumAggregate = {
  __typename?: 'CompanySumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type CompanySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CompanyUpdateInput = {
  clientCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  cnpj?: InputMaybe<StringFieldUpdateOperationsInput>;
  contractDr?: InputMaybe<StringFieldUpdateOperationsInput>;
  contractNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutCompanyNestedInput>;
  movements?: InputMaybe<MovementUpdateManyWithoutCenterOfCostNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompanyUpdateManyMutationInput = {
  clientCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  cnpj?: InputMaybe<StringFieldUpdateOperationsInput>;
  contractDr?: InputMaybe<StringFieldUpdateOperationsInput>;
  contractNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompanyUpdateOneRequiredWithoutFilesNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<CompanyCreateWithoutFilesInput>;
  update?: InputMaybe<CompanyUpdateWithoutFilesInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutFilesInput>;
};

export type CompanyUpdateOneRequiredWithoutMovementsNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutMovementsInput>;
  create?: InputMaybe<CompanyCreateWithoutMovementsInput>;
  update?: InputMaybe<CompanyUpdateWithoutMovementsInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutMovementsInput>;
};

export type CompanyUpdateWithoutFilesInput = {
  clientCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  cnpj?: InputMaybe<StringFieldUpdateOperationsInput>;
  contractDr?: InputMaybe<StringFieldUpdateOperationsInput>;
  contractNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movements?: InputMaybe<MovementUpdateManyWithoutCenterOfCostNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompanyUpdateWithoutMovementsInput = {
  clientCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  cnpj?: InputMaybe<StringFieldUpdateOperationsInput>;
  contractDr?: InputMaybe<StringFieldUpdateOperationsInput>;
  contractNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutCompanyNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompanyUpsertWithoutFilesInput = {
  create: CompanyCreateWithoutFilesInput;
  update: CompanyUpdateWithoutFilesInput;
};

export type CompanyUpsertWithoutMovementsInput = {
  create: CompanyCreateWithoutMovementsInput;
  update: CompanyUpdateWithoutMovementsInput;
};

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  clientCode?: InputMaybe<StringFilter>;
  cnpj?: InputMaybe<StringFilter>;
  contractDr?: InputMaybe<StringFilter>;
  contractNumber?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<FileListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  movements?: InputMaybe<MovementListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CompanyWhereUniqueInput = {
  clientCode?: InputMaybe<Scalars['String']>;
  cnpj?: InputMaybe<Scalars['String']>;
  contractNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Credits = {
  __typename?: 'Credits';
  createdAt: Scalars['DateTime'];
  date?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  file: File;
  fileId: Scalars['Int'];
  id: Scalars['BigInt'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Decimal'];
};

export type CreditsAvgAggregate = {
  __typename?: 'CreditsAvgAggregate';
  fileId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Decimal']>;
};

export type CreditsAvgOrderByAggregateInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type CreditsCountAggregate = {
  __typename?: 'CreditsCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  date: Scalars['Int'];
  description: Scalars['Int'];
  fileId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  value: Scalars['Int'];
};

export type CreditsCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type CreditsCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  file: FileCreateNestedOneWithoutCreditsInput;
  id?: InputMaybe<Scalars['BigInt']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type CreditsCreateManyFileInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type CreditsCreateManyFileInputEnvelope = {
  data: Array<CreditsCreateManyFileInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CreditsCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  fileId: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type CreditsCreateNestedManyWithoutFileInput = {
  connect?: InputMaybe<Array<CreditsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CreditsCreateOrConnectWithoutFileInput>>;
  create?: InputMaybe<Array<CreditsCreateWithoutFileInput>>;
  createMany?: InputMaybe<CreditsCreateManyFileInputEnvelope>;
};

export type CreditsCreateOrConnectWithoutFileInput = {
  create: CreditsCreateWithoutFileInput;
  where: CreditsWhereUniqueInput;
};

export type CreditsCreateWithoutFileInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type CreditsGroupBy = {
  __typename?: 'CreditsGroupBy';
  _avg?: Maybe<CreditsAvgAggregate>;
  _count?: Maybe<CreditsCountAggregate>;
  _max?: Maybe<CreditsMaxAggregate>;
  _min?: Maybe<CreditsMinAggregate>;
  _sum?: Maybe<CreditsSumAggregate>;
  createdAt: Scalars['DateTime'];
  date?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  fileId: Scalars['Int'];
  id: Scalars['BigInt'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Decimal'];
};

export type CreditsListRelationFilter = {
  every?: InputMaybe<CreditsWhereInput>;
  none?: InputMaybe<CreditsWhereInput>;
  some?: InputMaybe<CreditsWhereInput>;
};

export type CreditsMaxAggregate = {
  __typename?: 'CreditsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['BigInt']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Decimal']>;
};

export type CreditsMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type CreditsMinAggregate = {
  __typename?: 'CreditsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['BigInt']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Decimal']>;
};

export type CreditsMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type CreditsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CreditsOrderByWithAggregationInput = {
  _avg?: InputMaybe<CreditsAvgOrderByAggregateInput>;
  _count?: InputMaybe<CreditsCountOrderByAggregateInput>;
  _max?: InputMaybe<CreditsMaxOrderByAggregateInput>;
  _min?: InputMaybe<CreditsMinOrderByAggregateInput>;
  _sum?: InputMaybe<CreditsSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type CreditsOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  file?: InputMaybe<FileOrderByWithRelationInput>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum CreditsScalarFieldEnum {
  CreatedAt = 'createdAt',
  Date = 'date',
  Description = 'description',
  FileId = 'fileId',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  Value = 'value'
}

export type CreditsScalarWhereInput = {
  AND?: InputMaybe<Array<CreditsScalarWhereInput>>;
  NOT?: InputMaybe<Array<CreditsScalarWhereInput>>;
  OR?: InputMaybe<Array<CreditsScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  fileId?: InputMaybe<IntFilter>;
  id?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<DecimalFilter>;
};

export type CreditsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CreditsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CreditsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CreditsScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  date?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  fileId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  value?: InputMaybe<DecimalWithAggregatesFilter>;
};

export type CreditsSumAggregate = {
  __typename?: 'CreditsSumAggregate';
  fileId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['BigInt']>;
  value?: Maybe<Scalars['Decimal']>;
};

export type CreditsSumOrderByAggregateInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type CreditsUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  file?: InputMaybe<FileUpdateOneRequiredWithoutCreditsNestedInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CreditsUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CreditsUpdateManyWithWhereWithoutFileInput = {
  data: CreditsUpdateManyMutationInput;
  where: CreditsScalarWhereInput;
};

export type CreditsUpdateManyWithoutFileNestedInput = {
  connect?: InputMaybe<Array<CreditsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CreditsCreateOrConnectWithoutFileInput>>;
  create?: InputMaybe<Array<CreditsCreateWithoutFileInput>>;
  createMany?: InputMaybe<CreditsCreateManyFileInputEnvelope>;
  delete?: InputMaybe<Array<CreditsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CreditsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CreditsWhereUniqueInput>>;
  set?: InputMaybe<Array<CreditsWhereUniqueInput>>;
  update?: InputMaybe<Array<CreditsUpdateWithWhereUniqueWithoutFileInput>>;
  updateMany?: InputMaybe<Array<CreditsUpdateManyWithWhereWithoutFileInput>>;
  upsert?: InputMaybe<Array<CreditsUpsertWithWhereUniqueWithoutFileInput>>;
};

export type CreditsUpdateWithWhereUniqueWithoutFileInput = {
  data: CreditsUpdateWithoutFileInput;
  where: CreditsWhereUniqueInput;
};

export type CreditsUpdateWithoutFileInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CreditsUpsertWithWhereUniqueWithoutFileInput = {
  create: CreditsCreateWithoutFileInput;
  update: CreditsUpdateWithoutFileInput;
  where: CreditsWhereUniqueInput;
};

export type CreditsWhereInput = {
  AND?: InputMaybe<Array<CreditsWhereInput>>;
  NOT?: InputMaybe<Array<CreditsWhereInput>>;
  OR?: InputMaybe<Array<CreditsWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  file?: InputMaybe<FileRelationFilter>;
  fileId?: InputMaybe<IntFilter>;
  id?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<DecimalFilter>;
};

export type CreditsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Debits = {
  __typename?: 'Debits';
  createdAt: Scalars['DateTime'];
  date?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  fileId: Scalars['Int'];
  id: Scalars['BigInt'];
  receipt: File;
  updatedAt: Scalars['DateTime'];
  value: Scalars['Decimal'];
};

export type DebitsAvgAggregate = {
  __typename?: 'DebitsAvgAggregate';
  fileId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Decimal']>;
};

export type DebitsAvgOrderByAggregateInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type DebitsCountAggregate = {
  __typename?: 'DebitsCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  date: Scalars['Int'];
  description: Scalars['Int'];
  fileId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  value: Scalars['Int'];
};

export type DebitsCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type DebitsCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  receipt: FileCreateNestedOneWithoutDebitsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type DebitsCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  fileId: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type DebitsCreateManyReceiptInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type DebitsCreateManyReceiptInputEnvelope = {
  data: Array<DebitsCreateManyReceiptInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type DebitsCreateNestedManyWithoutReceiptInput = {
  connect?: InputMaybe<Array<DebitsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DebitsCreateOrConnectWithoutReceiptInput>>;
  create?: InputMaybe<Array<DebitsCreateWithoutReceiptInput>>;
  createMany?: InputMaybe<DebitsCreateManyReceiptInputEnvelope>;
};

export type DebitsCreateOrConnectWithoutReceiptInput = {
  create: DebitsCreateWithoutReceiptInput;
  where: DebitsWhereUniqueInput;
};

export type DebitsCreateWithoutReceiptInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type DebitsGroupBy = {
  __typename?: 'DebitsGroupBy';
  _avg?: Maybe<DebitsAvgAggregate>;
  _count?: Maybe<DebitsCountAggregate>;
  _max?: Maybe<DebitsMaxAggregate>;
  _min?: Maybe<DebitsMinAggregate>;
  _sum?: Maybe<DebitsSumAggregate>;
  createdAt: Scalars['DateTime'];
  date?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  fileId: Scalars['Int'];
  id: Scalars['BigInt'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Decimal'];
};

export type DebitsListRelationFilter = {
  every?: InputMaybe<DebitsWhereInput>;
  none?: InputMaybe<DebitsWhereInput>;
  some?: InputMaybe<DebitsWhereInput>;
};

export type DebitsMaxAggregate = {
  __typename?: 'DebitsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['BigInt']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Decimal']>;
};

export type DebitsMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type DebitsMinAggregate = {
  __typename?: 'DebitsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['BigInt']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Decimal']>;
};

export type DebitsMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type DebitsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type DebitsOrderByWithAggregationInput = {
  _avg?: InputMaybe<DebitsAvgOrderByAggregateInput>;
  _count?: InputMaybe<DebitsCountOrderByAggregateInput>;
  _max?: InputMaybe<DebitsMaxOrderByAggregateInput>;
  _min?: InputMaybe<DebitsMinOrderByAggregateInput>;
  _sum?: InputMaybe<DebitsSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type DebitsOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  receipt?: InputMaybe<FileOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum DebitsScalarFieldEnum {
  CreatedAt = 'createdAt',
  Date = 'date',
  Description = 'description',
  FileId = 'fileId',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  Value = 'value'
}

export type DebitsScalarWhereInput = {
  AND?: InputMaybe<Array<DebitsScalarWhereInput>>;
  NOT?: InputMaybe<Array<DebitsScalarWhereInput>>;
  OR?: InputMaybe<Array<DebitsScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  fileId?: InputMaybe<IntFilter>;
  id?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<DecimalFilter>;
};

export type DebitsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DebitsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DebitsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DebitsScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  date?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  fileId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  value?: InputMaybe<DecimalWithAggregatesFilter>;
};

export type DebitsSumAggregate = {
  __typename?: 'DebitsSumAggregate';
  fileId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['BigInt']>;
  value?: Maybe<Scalars['Decimal']>;
};

export type DebitsSumOrderByAggregateInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type DebitsUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  receipt?: InputMaybe<FileUpdateOneRequiredWithoutDebitsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type DebitsUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type DebitsUpdateManyWithWhereWithoutReceiptInput = {
  data: DebitsUpdateManyMutationInput;
  where: DebitsScalarWhereInput;
};

export type DebitsUpdateManyWithoutReceiptNestedInput = {
  connect?: InputMaybe<Array<DebitsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DebitsCreateOrConnectWithoutReceiptInput>>;
  create?: InputMaybe<Array<DebitsCreateWithoutReceiptInput>>;
  createMany?: InputMaybe<DebitsCreateManyReceiptInputEnvelope>;
  delete?: InputMaybe<Array<DebitsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DebitsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DebitsWhereUniqueInput>>;
  set?: InputMaybe<Array<DebitsWhereUniqueInput>>;
  update?: InputMaybe<Array<DebitsUpdateWithWhereUniqueWithoutReceiptInput>>;
  updateMany?: InputMaybe<Array<DebitsUpdateManyWithWhereWithoutReceiptInput>>;
  upsert?: InputMaybe<Array<DebitsUpsertWithWhereUniqueWithoutReceiptInput>>;
};

export type DebitsUpdateWithWhereUniqueWithoutReceiptInput = {
  data: DebitsUpdateWithoutReceiptInput;
  where: DebitsWhereUniqueInput;
};

export type DebitsUpdateWithoutReceiptInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type DebitsUpsertWithWhereUniqueWithoutReceiptInput = {
  create: DebitsCreateWithoutReceiptInput;
  update: DebitsUpdateWithoutReceiptInput;
  where: DebitsWhereUniqueInput;
};

export type DebitsWhereInput = {
  AND?: InputMaybe<Array<DebitsWhereInput>>;
  NOT?: InputMaybe<Array<DebitsWhereInput>>;
  OR?: InputMaybe<Array<DebitsWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  fileId?: InputMaybe<IntFilter>;
  id?: InputMaybe<BigIntFilter>;
  receipt?: InputMaybe<FileRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<DecimalFilter>;
};

export type DebitsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type DecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']>;
  divide?: InputMaybe<Scalars['Decimal']>;
  increment?: InputMaybe<Scalars['Decimal']>;
  multiply?: InputMaybe<Scalars['Decimal']>;
  set?: InputMaybe<Scalars['Decimal']>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalNullableFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDecimalNullableFilter>;
  _min?: InputMaybe<NestedDecimalNullableFilter>;
  _sum?: InputMaybe<NestedDecimalNullableFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type EnumFileTypesFieldUpdateOperationsInput = {
  set?: InputMaybe<FileTypes>;
};

export type EnumFileTypesFilter = {
  equals?: InputMaybe<FileTypes>;
  in?: InputMaybe<Array<FileTypes>>;
  not?: InputMaybe<NestedEnumFileTypesFilter>;
  notIn?: InputMaybe<Array<FileTypes>>;
};

export type EnumFileTypesWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumFileTypesFilter>;
  _min?: InputMaybe<NestedEnumFileTypesFilter>;
  equals?: InputMaybe<FileTypes>;
  in?: InputMaybe<Array<FileTypes>>;
  not?: InputMaybe<NestedEnumFileTypesWithAggregatesFilter>;
  notIn?: InputMaybe<Array<FileTypes>>;
};

export type EnumPermissionsNullableListFilter = {
  equals?: InputMaybe<Array<Permissions>>;
  has?: InputMaybe<Permissions>;
  hasEvery?: InputMaybe<Array<Permissions>>;
  hasSome?: InputMaybe<Array<Permissions>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumRolesFieldUpdateOperationsInput = {
  set?: InputMaybe<Roles>;
};

export type EnumRolesFilter = {
  equals?: InputMaybe<Roles>;
  in?: InputMaybe<Array<Roles>>;
  not?: InputMaybe<NestedEnumRolesFilter>;
  notIn?: InputMaybe<Array<Roles>>;
};

export type EnumRolesWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRolesFilter>;
  _min?: InputMaybe<NestedEnumRolesFilter>;
  equals?: InputMaybe<Roles>;
  in?: InputMaybe<Array<Roles>>;
  not?: InputMaybe<NestedEnumRolesWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Roles>>;
};

export type File = {
  __typename?: 'File';
  _count?: Maybe<FileCount>;
  company: Company;
  companyId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  credits: Array<Credits>;
  creditsProcessed: Scalars['Boolean'];
  date: Scalars['DateTime'];
  debits: Array<Debits>;
  debitsProcessed: Scalars['Boolean'];
  fileType: FileTypes;
  id: Scalars['Int'];
  movements: Array<Movement>;
  movementsProcessed: Scalars['Boolean'];
  name: Scalars['String'];
  processed: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};


export type FileCreditsArgs = {
  cursor?: InputMaybe<CreditsWhereUniqueInput>;
  distinct?: InputMaybe<Array<CreditsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CreditsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CreditsWhereInput>;
};


export type FileDebitsArgs = {
  cursor?: InputMaybe<DebitsWhereUniqueInput>;
  distinct?: InputMaybe<Array<DebitsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DebitsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DebitsWhereInput>;
};


export type FileMovementsArgs = {
  cursor?: InputMaybe<MovementWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovementScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovementOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovementWhereInput>;
};

export type FileAvgAggregate = {
  __typename?: 'FileAvgAggregate';
  companyId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type FileAvgOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type FileCount = {
  __typename?: 'FileCount';
  credits: Scalars['Int'];
  debits: Scalars['Int'];
  movements: Scalars['Int'];
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  _all: Scalars['Int'];
  companyId: Scalars['Int'];
  createdAt: Scalars['Int'];
  creditsProcessed: Scalars['Int'];
  date: Scalars['Int'];
  debitsProcessed: Scalars['Int'];
  fileType: Scalars['Int'];
  id: Scalars['Int'];
  movementsProcessed: Scalars['Int'];
  name: Scalars['Int'];
  processed: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type FileCountOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creditsProcessed?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  debitsProcessed?: InputMaybe<SortOrder>;
  fileType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movementsProcessed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  processed?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FileCreateInput = {
  company: CompanyCreateNestedOneWithoutFilesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credits?: InputMaybe<CreditsCreateNestedManyWithoutFileInput>;
  creditsProcessed?: InputMaybe<Scalars['Boolean']>;
  date: Scalars['DateTime'];
  debits?: InputMaybe<DebitsCreateNestedManyWithoutReceiptInput>;
  debitsProcessed?: InputMaybe<Scalars['Boolean']>;
  fileType: FileTypes;
  movements?: InputMaybe<MovementCreateNestedManyWithoutFileInput>;
  movementsProcessed?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  processed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FileCreateManyCompanyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creditsProcessed?: InputMaybe<Scalars['Boolean']>;
  date: Scalars['DateTime'];
  debitsProcessed?: InputMaybe<Scalars['Boolean']>;
  fileType: FileTypes;
  id?: InputMaybe<Scalars['Int']>;
  movementsProcessed?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  processed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FileCreateManyCompanyInputEnvelope = {
  data: Array<FileCreateManyCompanyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FileCreateManyInput = {
  companyId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creditsProcessed?: InputMaybe<Scalars['Boolean']>;
  date: Scalars['DateTime'];
  debitsProcessed?: InputMaybe<Scalars['Boolean']>;
  fileType: FileTypes;
  id?: InputMaybe<Scalars['Int']>;
  movementsProcessed?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  processed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FileCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<FileCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<FileCreateManyCompanyInputEnvelope>;
};

export type FileCreateNestedOneWithoutCreditsInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutCreditsInput>;
  create?: InputMaybe<FileCreateWithoutCreditsInput>;
};

export type FileCreateNestedOneWithoutDebitsInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutDebitsInput>;
  create?: InputMaybe<FileCreateWithoutDebitsInput>;
};

export type FileCreateNestedOneWithoutMovementsInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutMovementsInput>;
  create?: InputMaybe<FileCreateWithoutMovementsInput>;
};

export type FileCreateOrConnectWithoutCompanyInput = {
  create: FileCreateWithoutCompanyInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutCreditsInput = {
  create: FileCreateWithoutCreditsInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutDebitsInput = {
  create: FileCreateWithoutDebitsInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutMovementsInput = {
  create: FileCreateWithoutMovementsInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutCompanyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credits?: InputMaybe<CreditsCreateNestedManyWithoutFileInput>;
  creditsProcessed?: InputMaybe<Scalars['Boolean']>;
  date: Scalars['DateTime'];
  debits?: InputMaybe<DebitsCreateNestedManyWithoutReceiptInput>;
  debitsProcessed?: InputMaybe<Scalars['Boolean']>;
  fileType: FileTypes;
  movements?: InputMaybe<MovementCreateNestedManyWithoutFileInput>;
  movementsProcessed?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  processed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FileCreateWithoutCreditsInput = {
  company: CompanyCreateNestedOneWithoutFilesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creditsProcessed?: InputMaybe<Scalars['Boolean']>;
  date: Scalars['DateTime'];
  debits?: InputMaybe<DebitsCreateNestedManyWithoutReceiptInput>;
  debitsProcessed?: InputMaybe<Scalars['Boolean']>;
  fileType: FileTypes;
  movements?: InputMaybe<MovementCreateNestedManyWithoutFileInput>;
  movementsProcessed?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  processed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FileCreateWithoutDebitsInput = {
  company: CompanyCreateNestedOneWithoutFilesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credits?: InputMaybe<CreditsCreateNestedManyWithoutFileInput>;
  creditsProcessed?: InputMaybe<Scalars['Boolean']>;
  date: Scalars['DateTime'];
  debitsProcessed?: InputMaybe<Scalars['Boolean']>;
  fileType: FileTypes;
  movements?: InputMaybe<MovementCreateNestedManyWithoutFileInput>;
  movementsProcessed?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  processed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FileCreateWithoutMovementsInput = {
  company: CompanyCreateNestedOneWithoutFilesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credits?: InputMaybe<CreditsCreateNestedManyWithoutFileInput>;
  creditsProcessed?: InputMaybe<Scalars['Boolean']>;
  date: Scalars['DateTime'];
  debits?: InputMaybe<DebitsCreateNestedManyWithoutReceiptInput>;
  debitsProcessed?: InputMaybe<Scalars['Boolean']>;
  fileType: FileTypes;
  movementsProcessed?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  processed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FileGroupBy = {
  __typename?: 'FileGroupBy';
  _avg?: Maybe<FileAvgAggregate>;
  _count?: Maybe<FileCountAggregate>;
  _max?: Maybe<FileMaxAggregate>;
  _min?: Maybe<FileMinAggregate>;
  _sum?: Maybe<FileSumAggregate>;
  companyId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  creditsProcessed: Scalars['Boolean'];
  date: Scalars['DateTime'];
  debitsProcessed: Scalars['Boolean'];
  fileType: FileTypes;
  id: Scalars['Int'];
  movementsProcessed: Scalars['Boolean'];
  name: Scalars['String'];
  processed: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type FileListRelationFilter = {
  every?: InputMaybe<FileWhereInput>;
  none?: InputMaybe<FileWhereInput>;
  some?: InputMaybe<FileWhereInput>;
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  companyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creditsProcessed?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  debitsProcessed?: Maybe<Scalars['Boolean']>;
  fileType?: Maybe<FileTypes>;
  id?: Maybe<Scalars['Int']>;
  movementsProcessed?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FileMaxOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creditsProcessed?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  debitsProcessed?: InputMaybe<SortOrder>;
  fileType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movementsProcessed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  processed?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  companyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creditsProcessed?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  debitsProcessed?: Maybe<Scalars['Boolean']>;
  fileType?: Maybe<FileTypes>;
  id?: Maybe<Scalars['Int']>;
  movementsProcessed?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FileMinOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creditsProcessed?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  debitsProcessed?: InputMaybe<SortOrder>;
  fileType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movementsProcessed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  processed?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FileOrderByWithAggregationInput = {
  _avg?: InputMaybe<FileAvgOrderByAggregateInput>;
  _count?: InputMaybe<FileCountOrderByAggregateInput>;
  _max?: InputMaybe<FileMaxOrderByAggregateInput>;
  _min?: InputMaybe<FileMinOrderByAggregateInput>;
  _sum?: InputMaybe<FileSumOrderByAggregateInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creditsProcessed?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  debitsProcessed?: InputMaybe<SortOrder>;
  fileType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movementsProcessed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  processed?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FileOrderByWithRelationInput = {
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  credits?: InputMaybe<CreditsOrderByRelationAggregateInput>;
  creditsProcessed?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  debits?: InputMaybe<DebitsOrderByRelationAggregateInput>;
  debitsProcessed?: InputMaybe<SortOrder>;
  fileType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movements?: InputMaybe<MovementOrderByRelationAggregateInput>;
  movementsProcessed?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  processed?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FileRelationFilter = {
  is?: InputMaybe<FileWhereInput>;
  isNot?: InputMaybe<FileWhereInput>;
};

export enum FileScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  CreditsProcessed = 'creditsProcessed',
  Date = 'date',
  DebitsProcessed = 'debitsProcessed',
  FileType = 'fileType',
  Id = 'id',
  MovementsProcessed = 'movementsProcessed',
  Name = 'name',
  Processed = 'processed',
  UpdatedAt = 'updatedAt'
}

export type FileScalarWhereInput = {
  AND?: InputMaybe<Array<FileScalarWhereInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereInput>>;
  OR?: InputMaybe<Array<FileScalarWhereInput>>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  creditsProcessed?: InputMaybe<BoolFilter>;
  date?: InputMaybe<DateTimeFilter>;
  debitsProcessed?: InputMaybe<BoolFilter>;
  fileType?: InputMaybe<EnumFileTypesFilter>;
  id?: InputMaybe<IntFilter>;
  movementsProcessed?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  processed?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  companyId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  creditsProcessed?: InputMaybe<BoolWithAggregatesFilter>;
  date?: InputMaybe<DateTimeWithAggregatesFilter>;
  debitsProcessed?: InputMaybe<BoolWithAggregatesFilter>;
  fileType?: InputMaybe<EnumFileTypesWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  movementsProcessed?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  processed?: InputMaybe<BoolWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type FileSumAggregate = {
  __typename?: 'FileSumAggregate';
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type FileSumOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export enum FileTypes {
  International = 'INTERNATIONAL',
  National = 'NATIONAL'
}

export type FileUpdateInput = {
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutFilesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credits?: InputMaybe<CreditsUpdateManyWithoutFileNestedInput>;
  creditsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  debits?: InputMaybe<DebitsUpdateManyWithoutReceiptNestedInput>;
  debitsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  fileType?: InputMaybe<EnumFileTypesFieldUpdateOperationsInput>;
  movements?: InputMaybe<MovementUpdateManyWithoutFileNestedInput>;
  movementsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  processed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creditsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  debitsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  fileType?: InputMaybe<EnumFileTypesFieldUpdateOperationsInput>;
  movementsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  processed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpdateManyWithWhereWithoutCompanyInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<FileCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<FileCreateManyCompanyInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutCompanyInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type FileUpdateOneRequiredWithoutCreditsNestedInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutCreditsInput>;
  create?: InputMaybe<FileCreateWithoutCreditsInput>;
  update?: InputMaybe<FileUpdateWithoutCreditsInput>;
  upsert?: InputMaybe<FileUpsertWithoutCreditsInput>;
};

export type FileUpdateOneRequiredWithoutDebitsNestedInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutDebitsInput>;
  create?: InputMaybe<FileCreateWithoutDebitsInput>;
  update?: InputMaybe<FileUpdateWithoutDebitsInput>;
  upsert?: InputMaybe<FileUpsertWithoutDebitsInput>;
};

export type FileUpdateOneRequiredWithoutMovementsNestedInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutMovementsInput>;
  create?: InputMaybe<FileCreateWithoutMovementsInput>;
  update?: InputMaybe<FileUpdateWithoutMovementsInput>;
  upsert?: InputMaybe<FileUpsertWithoutMovementsInput>;
};

export type FileUpdateWithWhereUniqueWithoutCompanyInput = {
  data: FileUpdateWithoutCompanyInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithoutCompanyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credits?: InputMaybe<CreditsUpdateManyWithoutFileNestedInput>;
  creditsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  debits?: InputMaybe<DebitsUpdateManyWithoutReceiptNestedInput>;
  debitsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  fileType?: InputMaybe<EnumFileTypesFieldUpdateOperationsInput>;
  movements?: InputMaybe<MovementUpdateManyWithoutFileNestedInput>;
  movementsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  processed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpdateWithoutCreditsInput = {
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutFilesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creditsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  debits?: InputMaybe<DebitsUpdateManyWithoutReceiptNestedInput>;
  debitsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  fileType?: InputMaybe<EnumFileTypesFieldUpdateOperationsInput>;
  movements?: InputMaybe<MovementUpdateManyWithoutFileNestedInput>;
  movementsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  processed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpdateWithoutDebitsInput = {
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutFilesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credits?: InputMaybe<CreditsUpdateManyWithoutFileNestedInput>;
  creditsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  debitsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  fileType?: InputMaybe<EnumFileTypesFieldUpdateOperationsInput>;
  movements?: InputMaybe<MovementUpdateManyWithoutFileNestedInput>;
  movementsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  processed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpdateWithoutMovementsInput = {
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutFilesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credits?: InputMaybe<CreditsUpdateManyWithoutFileNestedInput>;
  creditsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  debits?: InputMaybe<DebitsUpdateManyWithoutReceiptNestedInput>;
  debitsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  fileType?: InputMaybe<EnumFileTypesFieldUpdateOperationsInput>;
  movementsProcessed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  processed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpsertWithWhereUniqueWithoutCompanyInput = {
  create: FileCreateWithoutCompanyInput;
  update: FileUpdateWithoutCompanyInput;
  where: FileWhereUniqueInput;
};

export type FileUpsertWithoutCreditsInput = {
  create: FileCreateWithoutCreditsInput;
  update: FileUpdateWithoutCreditsInput;
};

export type FileUpsertWithoutDebitsInput = {
  create: FileCreateWithoutDebitsInput;
  update: FileUpdateWithoutDebitsInput;
};

export type FileUpsertWithoutMovementsInput = {
  create: FileCreateWithoutMovementsInput;
  update: FileUpdateWithoutMovementsInput;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  credits?: InputMaybe<CreditsListRelationFilter>;
  creditsProcessed?: InputMaybe<BoolFilter>;
  date?: InputMaybe<DateTimeFilter>;
  debits?: InputMaybe<DebitsListRelationFilter>;
  debitsProcessed?: InputMaybe<BoolFilter>;
  fileType?: InputMaybe<EnumFileTypesFilter>;
  id?: InputMaybe<IntFilter>;
  movements?: InputMaybe<MovementListRelationFilter>;
  movementsProcessed?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  processed?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FileWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Movement = {
  __typename?: 'Movement';
  additionalServiceCode: Scalars['Int'];
  centerOfCost: Company;
  centerOfCostId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  declaredValue?: Maybe<Scalars['Decimal']>;
  destinationCity?: Maybe<City>;
  destinationCityId?: Maybe<Scalars['Int']>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  file: File;
  fileId: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['BigInt'];
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCity?: Maybe<City>;
  originCityId?: Maybe<Scalars['Int']>;
  originPostalCode: Scalars['String'];
  postalCard: PostalCard;
  postalCardId: Scalars['Int'];
  postingDate: Scalars['DateTime'];
  postingUnit: PostingUnit;
  postingUnitId: Scalars['Int'];
  realWeight: Scalars['Int'];
  service: Service;
  serviceId: Scalars['Int'];
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt: Scalars['DateTime'];
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementAvgAggregate = {
  __typename?: 'MovementAvgAggregate';
  additionalServiceCode?: Maybe<Scalars['Float']>;
  centerOfCostId?: Maybe<Scalars['Float']>;
  declaredValue?: Maybe<Scalars['Decimal']>;
  destinationCityId?: Maybe<Scalars['Float']>;
  diameter?: Maybe<Scalars['Float']>;
  discountValue?: Maybe<Scalars['Decimal']>;
  fileId?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  itemQty?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  operationalDiscountCode?: Maybe<Scalars['Float']>;
  originCityId?: Maybe<Scalars['Float']>;
  postalCardId?: Maybe<Scalars['Float']>;
  postingUnitId?: Maybe<Scalars['Float']>;
  realWeight?: Maybe<Scalars['Float']>;
  serviceId?: Maybe<Scalars['Float']>;
  serviceValue?: Maybe<Scalars['Decimal']>;
  unitCost?: Maybe<Scalars['Decimal']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type MovementAvgOrderByAggregateInput = {
  additionalServiceCode?: InputMaybe<SortOrder>;
  centerOfCostId?: InputMaybe<SortOrder>;
  declaredValue?: InputMaybe<SortOrder>;
  destinationCityId?: InputMaybe<SortOrder>;
  diameter?: InputMaybe<SortOrder>;
  discountValue?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemQty?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  operationalDiscountCode?: InputMaybe<SortOrder>;
  originCityId?: InputMaybe<SortOrder>;
  postalCardId?: InputMaybe<SortOrder>;
  postingUnitId?: InputMaybe<SortOrder>;
  realWeight?: InputMaybe<SortOrder>;
  serviceId?: InputMaybe<SortOrder>;
  serviceValue?: InputMaybe<SortOrder>;
  unitCost?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type MovementCountAggregate = {
  __typename?: 'MovementCountAggregate';
  _all: Scalars['Int'];
  additionalServiceCode: Scalars['Int'];
  centerOfCostId: Scalars['Int'];
  createdAt: Scalars['Int'];
  declaredValue: Scalars['Int'];
  destinationCityId: Scalars['Int'];
  destinationPostalCode: Scalars['Int'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Int'];
  documentNumber: Scalars['Int'];
  fileId: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['Int'];
  itemQty: Scalars['Int'];
  label: Scalars['Int'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCityId: Scalars['Int'];
  originPostalCode: Scalars['Int'];
  postalCardId: Scalars['Int'];
  postingDate: Scalars['Int'];
  postingUnitId: Scalars['Int'];
  realWeight: Scalars['Int'];
  serviceId: Scalars['Int'];
  serviceValue: Scalars['Int'];
  unitCost: Scalars['Int'];
  updatedAt: Scalars['Int'];
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCountOrderByAggregateInput = {
  additionalServiceCode?: InputMaybe<SortOrder>;
  centerOfCostId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  declaredValue?: InputMaybe<SortOrder>;
  destinationCityId?: InputMaybe<SortOrder>;
  destinationPostalCode?: InputMaybe<SortOrder>;
  diameter?: InputMaybe<SortOrder>;
  discountValue?: InputMaybe<SortOrder>;
  documentNumber?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemQty?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  operationalDiscountCode?: InputMaybe<SortOrder>;
  originCityId?: InputMaybe<SortOrder>;
  originPostalCode?: InputMaybe<SortOrder>;
  postalCardId?: InputMaybe<SortOrder>;
  postingDate?: InputMaybe<SortOrder>;
  postingUnitId?: InputMaybe<SortOrder>;
  realWeight?: InputMaybe<SortOrder>;
  serviceId?: InputMaybe<SortOrder>;
  serviceValue?: InputMaybe<SortOrder>;
  unitCost?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type MovementCreateInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCost: CompanyCreateNestedOneWithoutMovementsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCity?: InputMaybe<CityCreateNestedOneWithoutDestinationOriginCityInput>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  file: FileCreateNestedOneWithoutMovementsInput;
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCity?: InputMaybe<CityCreateNestedOneWithoutMovementsOriginCityInput>;
  originPostalCode: Scalars['String'];
  postalCard: PostalCardCreateNestedOneWithoutMovementsInput;
  postingDate: Scalars['DateTime'];
  postingUnit: PostingUnitCreateNestedOneWithoutMovementsInput;
  realWeight: Scalars['Int'];
  service: ServiceCreateNestedOneWithoutMovementsInput;
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateManyCenterOfCostInput = {
  additionalServiceCode: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCityId?: InputMaybe<Scalars['Int']>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  fileId: Scalars['Int'];
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCityId?: InputMaybe<Scalars['Int']>;
  originPostalCode: Scalars['String'];
  postalCardId: Scalars['Int'];
  postingDate: Scalars['DateTime'];
  postingUnitId: Scalars['Int'];
  realWeight: Scalars['Int'];
  serviceId: Scalars['Int'];
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateManyCenterOfCostInputEnvelope = {
  data: Array<MovementCreateManyCenterOfCostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovementCreateManyDestinationCityInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCostId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  fileId: Scalars['Int'];
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCityId?: InputMaybe<Scalars['Int']>;
  originPostalCode: Scalars['String'];
  postalCardId: Scalars['Int'];
  postingDate: Scalars['DateTime'];
  postingUnitId: Scalars['Int'];
  realWeight: Scalars['Int'];
  serviceId: Scalars['Int'];
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateManyDestinationCityInputEnvelope = {
  data: Array<MovementCreateManyDestinationCityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovementCreateManyFileInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCostId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCityId?: InputMaybe<Scalars['Int']>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCityId?: InputMaybe<Scalars['Int']>;
  originPostalCode: Scalars['String'];
  postalCardId: Scalars['Int'];
  postingDate: Scalars['DateTime'];
  postingUnitId: Scalars['Int'];
  realWeight: Scalars['Int'];
  serviceId: Scalars['Int'];
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateManyFileInputEnvelope = {
  data: Array<MovementCreateManyFileInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovementCreateManyInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCostId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCityId?: InputMaybe<Scalars['Int']>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  fileId: Scalars['Int'];
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCityId?: InputMaybe<Scalars['Int']>;
  originPostalCode: Scalars['String'];
  postalCardId: Scalars['Int'];
  postingDate: Scalars['DateTime'];
  postingUnitId: Scalars['Int'];
  realWeight: Scalars['Int'];
  serviceId: Scalars['Int'];
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateManyOriginCityInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCostId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCityId?: InputMaybe<Scalars['Int']>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  fileId: Scalars['Int'];
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originPostalCode: Scalars['String'];
  postalCardId: Scalars['Int'];
  postingDate: Scalars['DateTime'];
  postingUnitId: Scalars['Int'];
  realWeight: Scalars['Int'];
  serviceId: Scalars['Int'];
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateManyOriginCityInputEnvelope = {
  data: Array<MovementCreateManyOriginCityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovementCreateManyPostalCardInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCostId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCityId?: InputMaybe<Scalars['Int']>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  fileId: Scalars['Int'];
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCityId?: InputMaybe<Scalars['Int']>;
  originPostalCode: Scalars['String'];
  postingDate: Scalars['DateTime'];
  postingUnitId: Scalars['Int'];
  realWeight: Scalars['Int'];
  serviceId: Scalars['Int'];
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateManyPostalCardInputEnvelope = {
  data: Array<MovementCreateManyPostalCardInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovementCreateManyPostingUnitInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCostId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCityId?: InputMaybe<Scalars['Int']>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  fileId: Scalars['Int'];
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCityId?: InputMaybe<Scalars['Int']>;
  originPostalCode: Scalars['String'];
  postalCardId: Scalars['Int'];
  postingDate: Scalars['DateTime'];
  realWeight: Scalars['Int'];
  serviceId: Scalars['Int'];
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateManyPostingUnitInputEnvelope = {
  data: Array<MovementCreateManyPostingUnitInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovementCreateManyServiceInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCostId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCityId?: InputMaybe<Scalars['Int']>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  fileId: Scalars['Int'];
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCityId?: InputMaybe<Scalars['Int']>;
  originPostalCode: Scalars['String'];
  postalCardId: Scalars['Int'];
  postingDate: Scalars['DateTime'];
  postingUnitId: Scalars['Int'];
  realWeight: Scalars['Int'];
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateManyServiceInputEnvelope = {
  data: Array<MovementCreateManyServiceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovementCreateNestedManyWithoutCenterOfCostInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutCenterOfCostInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutCenterOfCostInput>>;
  createMany?: InputMaybe<MovementCreateManyCenterOfCostInputEnvelope>;
};

export type MovementCreateNestedManyWithoutDestinationCityInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutDestinationCityInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutDestinationCityInput>>;
  createMany?: InputMaybe<MovementCreateManyDestinationCityInputEnvelope>;
};

export type MovementCreateNestedManyWithoutFileInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutFileInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutFileInput>>;
  createMany?: InputMaybe<MovementCreateManyFileInputEnvelope>;
};

export type MovementCreateNestedManyWithoutOriginCityInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutOriginCityInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutOriginCityInput>>;
  createMany?: InputMaybe<MovementCreateManyOriginCityInputEnvelope>;
};

export type MovementCreateNestedManyWithoutPostalCardInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutPostalCardInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutPostalCardInput>>;
  createMany?: InputMaybe<MovementCreateManyPostalCardInputEnvelope>;
};

export type MovementCreateNestedManyWithoutPostingUnitInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutPostingUnitInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutPostingUnitInput>>;
  createMany?: InputMaybe<MovementCreateManyPostingUnitInputEnvelope>;
};

export type MovementCreateNestedManyWithoutServiceInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutServiceInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutServiceInput>>;
  createMany?: InputMaybe<MovementCreateManyServiceInputEnvelope>;
};

export type MovementCreateOrConnectWithoutCenterOfCostInput = {
  create: MovementCreateWithoutCenterOfCostInput;
  where: MovementWhereUniqueInput;
};

export type MovementCreateOrConnectWithoutDestinationCityInput = {
  create: MovementCreateWithoutDestinationCityInput;
  where: MovementWhereUniqueInput;
};

export type MovementCreateOrConnectWithoutFileInput = {
  create: MovementCreateWithoutFileInput;
  where: MovementWhereUniqueInput;
};

export type MovementCreateOrConnectWithoutOriginCityInput = {
  create: MovementCreateWithoutOriginCityInput;
  where: MovementWhereUniqueInput;
};

export type MovementCreateOrConnectWithoutPostalCardInput = {
  create: MovementCreateWithoutPostalCardInput;
  where: MovementWhereUniqueInput;
};

export type MovementCreateOrConnectWithoutPostingUnitInput = {
  create: MovementCreateWithoutPostingUnitInput;
  where: MovementWhereUniqueInput;
};

export type MovementCreateOrConnectWithoutServiceInput = {
  create: MovementCreateWithoutServiceInput;
  where: MovementWhereUniqueInput;
};

export type MovementCreateWithoutCenterOfCostInput = {
  additionalServiceCode: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCity?: InputMaybe<CityCreateNestedOneWithoutDestinationOriginCityInput>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  file: FileCreateNestedOneWithoutMovementsInput;
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCity?: InputMaybe<CityCreateNestedOneWithoutMovementsOriginCityInput>;
  originPostalCode: Scalars['String'];
  postalCard: PostalCardCreateNestedOneWithoutMovementsInput;
  postingDate: Scalars['DateTime'];
  postingUnit: PostingUnitCreateNestedOneWithoutMovementsInput;
  realWeight: Scalars['Int'];
  service: ServiceCreateNestedOneWithoutMovementsInput;
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateWithoutDestinationCityInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCost: CompanyCreateNestedOneWithoutMovementsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  file: FileCreateNestedOneWithoutMovementsInput;
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCity?: InputMaybe<CityCreateNestedOneWithoutMovementsOriginCityInput>;
  originPostalCode: Scalars['String'];
  postalCard: PostalCardCreateNestedOneWithoutMovementsInput;
  postingDate: Scalars['DateTime'];
  postingUnit: PostingUnitCreateNestedOneWithoutMovementsInput;
  realWeight: Scalars['Int'];
  service: ServiceCreateNestedOneWithoutMovementsInput;
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateWithoutFileInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCost: CompanyCreateNestedOneWithoutMovementsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCity?: InputMaybe<CityCreateNestedOneWithoutDestinationOriginCityInput>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCity?: InputMaybe<CityCreateNestedOneWithoutMovementsOriginCityInput>;
  originPostalCode: Scalars['String'];
  postalCard: PostalCardCreateNestedOneWithoutMovementsInput;
  postingDate: Scalars['DateTime'];
  postingUnit: PostingUnitCreateNestedOneWithoutMovementsInput;
  realWeight: Scalars['Int'];
  service: ServiceCreateNestedOneWithoutMovementsInput;
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateWithoutOriginCityInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCost: CompanyCreateNestedOneWithoutMovementsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCity?: InputMaybe<CityCreateNestedOneWithoutDestinationOriginCityInput>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  file: FileCreateNestedOneWithoutMovementsInput;
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originPostalCode: Scalars['String'];
  postalCard: PostalCardCreateNestedOneWithoutMovementsInput;
  postingDate: Scalars['DateTime'];
  postingUnit: PostingUnitCreateNestedOneWithoutMovementsInput;
  realWeight: Scalars['Int'];
  service: ServiceCreateNestedOneWithoutMovementsInput;
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateWithoutPostalCardInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCost: CompanyCreateNestedOneWithoutMovementsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCity?: InputMaybe<CityCreateNestedOneWithoutDestinationOriginCityInput>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  file: FileCreateNestedOneWithoutMovementsInput;
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCity?: InputMaybe<CityCreateNestedOneWithoutMovementsOriginCityInput>;
  originPostalCode: Scalars['String'];
  postingDate: Scalars['DateTime'];
  postingUnit: PostingUnitCreateNestedOneWithoutMovementsInput;
  realWeight: Scalars['Int'];
  service: ServiceCreateNestedOneWithoutMovementsInput;
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateWithoutPostingUnitInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCost: CompanyCreateNestedOneWithoutMovementsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCity?: InputMaybe<CityCreateNestedOneWithoutDestinationOriginCityInput>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  file: FileCreateNestedOneWithoutMovementsInput;
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCity?: InputMaybe<CityCreateNestedOneWithoutMovementsOriginCityInput>;
  originPostalCode: Scalars['String'];
  postalCard: PostalCardCreateNestedOneWithoutMovementsInput;
  postingDate: Scalars['DateTime'];
  realWeight: Scalars['Int'];
  service: ServiceCreateNestedOneWithoutMovementsInput;
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementCreateWithoutServiceInput = {
  additionalServiceCode: Scalars['Int'];
  centerOfCost: CompanyCreateNestedOneWithoutMovementsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  destinationCity?: InputMaybe<CityCreateNestedOneWithoutDestinationOriginCityInput>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  file: FileCreateNestedOneWithoutMovementsInput;
  height: Scalars['Int'];
  id?: InputMaybe<Scalars['BigInt']>;
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCity?: InputMaybe<CityCreateNestedOneWithoutMovementsOriginCityInput>;
  originPostalCode: Scalars['String'];
  postalCard: PostalCardCreateNestedOneWithoutMovementsInput;
  postingDate: Scalars['DateTime'];
  postingUnit: PostingUnitCreateNestedOneWithoutMovementsInput;
  realWeight: Scalars['Int'];
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementGroupBy = {
  __typename?: 'MovementGroupBy';
  _avg?: Maybe<MovementAvgAggregate>;
  _count?: Maybe<MovementCountAggregate>;
  _max?: Maybe<MovementMaxAggregate>;
  _min?: Maybe<MovementMinAggregate>;
  _sum?: Maybe<MovementSumAggregate>;
  additionalServiceCode: Scalars['Int'];
  centerOfCostId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  declaredValue?: Maybe<Scalars['Decimal']>;
  destinationCityId?: Maybe<Scalars['Int']>;
  destinationPostalCode: Scalars['String'];
  diameter: Scalars['Int'];
  discountValue: Scalars['Decimal'];
  documentNumber: Scalars['String'];
  fileId: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['BigInt'];
  itemQty: Scalars['Int'];
  label: Scalars['String'];
  length: Scalars['Int'];
  operationalDiscountCode: Scalars['Int'];
  originCityId?: Maybe<Scalars['Int']>;
  originPostalCode: Scalars['String'];
  postalCardId: Scalars['Int'];
  postingDate: Scalars['DateTime'];
  postingUnitId: Scalars['Int'];
  realWeight: Scalars['Int'];
  serviceId: Scalars['Int'];
  serviceValue: Scalars['Decimal'];
  unitCost: Scalars['Decimal'];
  updatedAt: Scalars['DateTime'];
  weight: Scalars['Int'];
  width: Scalars['Int'];
};

export type MovementListRelationFilter = {
  every?: InputMaybe<MovementWhereInput>;
  none?: InputMaybe<MovementWhereInput>;
  some?: InputMaybe<MovementWhereInput>;
};

export type MovementMaxAggregate = {
  __typename?: 'MovementMaxAggregate';
  additionalServiceCode?: Maybe<Scalars['Int']>;
  centerOfCostId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  declaredValue?: Maybe<Scalars['Decimal']>;
  destinationCityId?: Maybe<Scalars['Int']>;
  destinationPostalCode?: Maybe<Scalars['String']>;
  diameter?: Maybe<Scalars['Int']>;
  discountValue?: Maybe<Scalars['Decimal']>;
  documentNumber?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['BigInt']>;
  itemQty?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  operationalDiscountCode?: Maybe<Scalars['Int']>;
  originCityId?: Maybe<Scalars['Int']>;
  originPostalCode?: Maybe<Scalars['String']>;
  postalCardId?: Maybe<Scalars['Int']>;
  postingDate?: Maybe<Scalars['DateTime']>;
  postingUnitId?: Maybe<Scalars['Int']>;
  realWeight?: Maybe<Scalars['Int']>;
  serviceId?: Maybe<Scalars['Int']>;
  serviceValue?: Maybe<Scalars['Decimal']>;
  unitCost?: Maybe<Scalars['Decimal']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MovementMaxOrderByAggregateInput = {
  additionalServiceCode?: InputMaybe<SortOrder>;
  centerOfCostId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  declaredValue?: InputMaybe<SortOrder>;
  destinationCityId?: InputMaybe<SortOrder>;
  destinationPostalCode?: InputMaybe<SortOrder>;
  diameter?: InputMaybe<SortOrder>;
  discountValue?: InputMaybe<SortOrder>;
  documentNumber?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemQty?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  operationalDiscountCode?: InputMaybe<SortOrder>;
  originCityId?: InputMaybe<SortOrder>;
  originPostalCode?: InputMaybe<SortOrder>;
  postalCardId?: InputMaybe<SortOrder>;
  postingDate?: InputMaybe<SortOrder>;
  postingUnitId?: InputMaybe<SortOrder>;
  realWeight?: InputMaybe<SortOrder>;
  serviceId?: InputMaybe<SortOrder>;
  serviceValue?: InputMaybe<SortOrder>;
  unitCost?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type MovementMinAggregate = {
  __typename?: 'MovementMinAggregate';
  additionalServiceCode?: Maybe<Scalars['Int']>;
  centerOfCostId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  declaredValue?: Maybe<Scalars['Decimal']>;
  destinationCityId?: Maybe<Scalars['Int']>;
  destinationPostalCode?: Maybe<Scalars['String']>;
  diameter?: Maybe<Scalars['Int']>;
  discountValue?: Maybe<Scalars['Decimal']>;
  documentNumber?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['BigInt']>;
  itemQty?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  operationalDiscountCode?: Maybe<Scalars['Int']>;
  originCityId?: Maybe<Scalars['Int']>;
  originPostalCode?: Maybe<Scalars['String']>;
  postalCardId?: Maybe<Scalars['Int']>;
  postingDate?: Maybe<Scalars['DateTime']>;
  postingUnitId?: Maybe<Scalars['Int']>;
  realWeight?: Maybe<Scalars['Int']>;
  serviceId?: Maybe<Scalars['Int']>;
  serviceValue?: Maybe<Scalars['Decimal']>;
  unitCost?: Maybe<Scalars['Decimal']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MovementMinOrderByAggregateInput = {
  additionalServiceCode?: InputMaybe<SortOrder>;
  centerOfCostId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  declaredValue?: InputMaybe<SortOrder>;
  destinationCityId?: InputMaybe<SortOrder>;
  destinationPostalCode?: InputMaybe<SortOrder>;
  diameter?: InputMaybe<SortOrder>;
  discountValue?: InputMaybe<SortOrder>;
  documentNumber?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemQty?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  operationalDiscountCode?: InputMaybe<SortOrder>;
  originCityId?: InputMaybe<SortOrder>;
  originPostalCode?: InputMaybe<SortOrder>;
  postalCardId?: InputMaybe<SortOrder>;
  postingDate?: InputMaybe<SortOrder>;
  postingUnitId?: InputMaybe<SortOrder>;
  realWeight?: InputMaybe<SortOrder>;
  serviceId?: InputMaybe<SortOrder>;
  serviceValue?: InputMaybe<SortOrder>;
  unitCost?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type MovementOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovementOrderByWithAggregationInput = {
  _avg?: InputMaybe<MovementAvgOrderByAggregateInput>;
  _count?: InputMaybe<MovementCountOrderByAggregateInput>;
  _max?: InputMaybe<MovementMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovementMinOrderByAggregateInput>;
  _sum?: InputMaybe<MovementSumOrderByAggregateInput>;
  additionalServiceCode?: InputMaybe<SortOrder>;
  centerOfCostId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  declaredValue?: InputMaybe<SortOrder>;
  destinationCityId?: InputMaybe<SortOrder>;
  destinationPostalCode?: InputMaybe<SortOrder>;
  diameter?: InputMaybe<SortOrder>;
  discountValue?: InputMaybe<SortOrder>;
  documentNumber?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemQty?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  operationalDiscountCode?: InputMaybe<SortOrder>;
  originCityId?: InputMaybe<SortOrder>;
  originPostalCode?: InputMaybe<SortOrder>;
  postalCardId?: InputMaybe<SortOrder>;
  postingDate?: InputMaybe<SortOrder>;
  postingUnitId?: InputMaybe<SortOrder>;
  realWeight?: InputMaybe<SortOrder>;
  serviceId?: InputMaybe<SortOrder>;
  serviceValue?: InputMaybe<SortOrder>;
  unitCost?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type MovementOrderByWithRelationInput = {
  additionalServiceCode?: InputMaybe<SortOrder>;
  centerOfCost?: InputMaybe<CompanyOrderByWithRelationInput>;
  centerOfCostId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  declaredValue?: InputMaybe<SortOrder>;
  destinationCity?: InputMaybe<CityOrderByWithRelationInput>;
  destinationCityId?: InputMaybe<SortOrder>;
  destinationPostalCode?: InputMaybe<SortOrder>;
  diameter?: InputMaybe<SortOrder>;
  discountValue?: InputMaybe<SortOrder>;
  documentNumber?: InputMaybe<SortOrder>;
  file?: InputMaybe<FileOrderByWithRelationInput>;
  fileId?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemQty?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  operationalDiscountCode?: InputMaybe<SortOrder>;
  originCity?: InputMaybe<CityOrderByWithRelationInput>;
  originCityId?: InputMaybe<SortOrder>;
  originPostalCode?: InputMaybe<SortOrder>;
  postalCard?: InputMaybe<PostalCardOrderByWithRelationInput>;
  postalCardId?: InputMaybe<SortOrder>;
  postingDate?: InputMaybe<SortOrder>;
  postingUnit?: InputMaybe<PostingUnitOrderByWithRelationInput>;
  postingUnitId?: InputMaybe<SortOrder>;
  realWeight?: InputMaybe<SortOrder>;
  service?: InputMaybe<ServiceOrderByWithRelationInput>;
  serviceId?: InputMaybe<SortOrder>;
  serviceValue?: InputMaybe<SortOrder>;
  unitCost?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export enum MovementScalarFieldEnum {
  AdditionalServiceCode = 'additionalServiceCode',
  CenterOfCostId = 'centerOfCostId',
  CreatedAt = 'createdAt',
  DeclaredValue = 'declaredValue',
  DestinationCityId = 'destinationCityId',
  DestinationPostalCode = 'destinationPostalCode',
  Diameter = 'diameter',
  DiscountValue = 'discountValue',
  DocumentNumber = 'documentNumber',
  FileId = 'fileId',
  Height = 'height',
  Id = 'id',
  ItemQty = 'itemQty',
  Label = 'label',
  Length = 'length',
  OperationalDiscountCode = 'operationalDiscountCode',
  OriginCityId = 'originCityId',
  OriginPostalCode = 'originPostalCode',
  PostalCardId = 'postalCardId',
  PostingDate = 'postingDate',
  PostingUnitId = 'postingUnitId',
  RealWeight = 'realWeight',
  ServiceId = 'serviceId',
  ServiceValue = 'serviceValue',
  UnitCost = 'unitCost',
  UpdatedAt = 'updatedAt',
  Weight = 'weight',
  Width = 'width'
}

export type MovementScalarWhereInput = {
  AND?: InputMaybe<Array<MovementScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovementScalarWhereInput>>;
  OR?: InputMaybe<Array<MovementScalarWhereInput>>;
  additionalServiceCode?: InputMaybe<IntFilter>;
  centerOfCostId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  declaredValue?: InputMaybe<DecimalNullableFilter>;
  destinationCityId?: InputMaybe<IntNullableFilter>;
  destinationPostalCode?: InputMaybe<StringFilter>;
  diameter?: InputMaybe<IntFilter>;
  discountValue?: InputMaybe<DecimalFilter>;
  documentNumber?: InputMaybe<StringFilter>;
  fileId?: InputMaybe<IntFilter>;
  height?: InputMaybe<IntFilter>;
  id?: InputMaybe<BigIntFilter>;
  itemQty?: InputMaybe<IntFilter>;
  label?: InputMaybe<StringFilter>;
  length?: InputMaybe<IntFilter>;
  operationalDiscountCode?: InputMaybe<IntFilter>;
  originCityId?: InputMaybe<IntNullableFilter>;
  originPostalCode?: InputMaybe<StringFilter>;
  postalCardId?: InputMaybe<IntFilter>;
  postingDate?: InputMaybe<DateTimeFilter>;
  postingUnitId?: InputMaybe<IntFilter>;
  realWeight?: InputMaybe<IntFilter>;
  serviceId?: InputMaybe<IntFilter>;
  serviceValue?: InputMaybe<DecimalFilter>;
  unitCost?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  weight?: InputMaybe<IntFilter>;
  width?: InputMaybe<IntFilter>;
};

export type MovementScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovementScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovementScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovementScalarWhereWithAggregatesInput>>;
  additionalServiceCode?: InputMaybe<IntWithAggregatesFilter>;
  centerOfCostId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  declaredValue?: InputMaybe<DecimalNullableWithAggregatesFilter>;
  destinationCityId?: InputMaybe<IntNullableWithAggregatesFilter>;
  destinationPostalCode?: InputMaybe<StringWithAggregatesFilter>;
  diameter?: InputMaybe<IntWithAggregatesFilter>;
  discountValue?: InputMaybe<DecimalWithAggregatesFilter>;
  documentNumber?: InputMaybe<StringWithAggregatesFilter>;
  fileId?: InputMaybe<IntWithAggregatesFilter>;
  height?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<BigIntWithAggregatesFilter>;
  itemQty?: InputMaybe<IntWithAggregatesFilter>;
  label?: InputMaybe<StringWithAggregatesFilter>;
  length?: InputMaybe<IntWithAggregatesFilter>;
  operationalDiscountCode?: InputMaybe<IntWithAggregatesFilter>;
  originCityId?: InputMaybe<IntNullableWithAggregatesFilter>;
  originPostalCode?: InputMaybe<StringWithAggregatesFilter>;
  postalCardId?: InputMaybe<IntWithAggregatesFilter>;
  postingDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  postingUnitId?: InputMaybe<IntWithAggregatesFilter>;
  realWeight?: InputMaybe<IntWithAggregatesFilter>;
  serviceId?: InputMaybe<IntWithAggregatesFilter>;
  serviceValue?: InputMaybe<DecimalWithAggregatesFilter>;
  unitCost?: InputMaybe<DecimalWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  weight?: InputMaybe<IntWithAggregatesFilter>;
  width?: InputMaybe<IntWithAggregatesFilter>;
};

export type MovementSumAggregate = {
  __typename?: 'MovementSumAggregate';
  additionalServiceCode?: Maybe<Scalars['Int']>;
  centerOfCostId?: Maybe<Scalars['Int']>;
  declaredValue?: Maybe<Scalars['Decimal']>;
  destinationCityId?: Maybe<Scalars['Int']>;
  diameter?: Maybe<Scalars['Int']>;
  discountValue?: Maybe<Scalars['Decimal']>;
  fileId?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['BigInt']>;
  itemQty?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  operationalDiscountCode?: Maybe<Scalars['Int']>;
  originCityId?: Maybe<Scalars['Int']>;
  postalCardId?: Maybe<Scalars['Int']>;
  postingUnitId?: Maybe<Scalars['Int']>;
  realWeight?: Maybe<Scalars['Int']>;
  serviceId?: Maybe<Scalars['Int']>;
  serviceValue?: Maybe<Scalars['Decimal']>;
  unitCost?: Maybe<Scalars['Decimal']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MovementSumOrderByAggregateInput = {
  additionalServiceCode?: InputMaybe<SortOrder>;
  centerOfCostId?: InputMaybe<SortOrder>;
  declaredValue?: InputMaybe<SortOrder>;
  destinationCityId?: InputMaybe<SortOrder>;
  diameter?: InputMaybe<SortOrder>;
  discountValue?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemQty?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  operationalDiscountCode?: InputMaybe<SortOrder>;
  originCityId?: InputMaybe<SortOrder>;
  postalCardId?: InputMaybe<SortOrder>;
  postingUnitId?: InputMaybe<SortOrder>;
  realWeight?: InputMaybe<SortOrder>;
  serviceId?: InputMaybe<SortOrder>;
  serviceValue?: InputMaybe<SortOrder>;
  unitCost?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type MovementUpdateInput = {
  additionalServiceCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  centerOfCost?: InputMaybe<CompanyUpdateOneRequiredWithoutMovementsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  declaredValue?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  destinationCity?: InputMaybe<CityUpdateOneWithoutDestinationOriginCityNestedInput>;
  destinationPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  diameter?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  documentNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  file?: InputMaybe<FileUpdateOneRequiredWithoutMovementsNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  itemQty?: InputMaybe<IntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  length?: InputMaybe<IntFieldUpdateOperationsInput>;
  operationalDiscountCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  originCity?: InputMaybe<CityUpdateOneWithoutMovementsOriginCityNestedInput>;
  originPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  postalCard?: InputMaybe<PostalCardUpdateOneRequiredWithoutMovementsNestedInput>;
  postingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  postingUnit?: InputMaybe<PostingUnitUpdateOneRequiredWithoutMovementsNestedInput>;
  realWeight?: InputMaybe<IntFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneRequiredWithoutMovementsNestedInput>;
  serviceValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unitCost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<IntFieldUpdateOperationsInput>;
  width?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type MovementUpdateManyMutationInput = {
  additionalServiceCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  declaredValue?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  destinationPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  diameter?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  documentNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  itemQty?: InputMaybe<IntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  length?: InputMaybe<IntFieldUpdateOperationsInput>;
  operationalDiscountCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  originPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  postingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  realWeight?: InputMaybe<IntFieldUpdateOperationsInput>;
  serviceValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unitCost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<IntFieldUpdateOperationsInput>;
  width?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type MovementUpdateManyWithWhereWithoutCenterOfCostInput = {
  data: MovementUpdateManyMutationInput;
  where: MovementScalarWhereInput;
};

export type MovementUpdateManyWithWhereWithoutDestinationCityInput = {
  data: MovementUpdateManyMutationInput;
  where: MovementScalarWhereInput;
};

export type MovementUpdateManyWithWhereWithoutFileInput = {
  data: MovementUpdateManyMutationInput;
  where: MovementScalarWhereInput;
};

export type MovementUpdateManyWithWhereWithoutOriginCityInput = {
  data: MovementUpdateManyMutationInput;
  where: MovementScalarWhereInput;
};

export type MovementUpdateManyWithWhereWithoutPostalCardInput = {
  data: MovementUpdateManyMutationInput;
  where: MovementScalarWhereInput;
};

export type MovementUpdateManyWithWhereWithoutPostingUnitInput = {
  data: MovementUpdateManyMutationInput;
  where: MovementScalarWhereInput;
};

export type MovementUpdateManyWithWhereWithoutServiceInput = {
  data: MovementUpdateManyMutationInput;
  where: MovementScalarWhereInput;
};

export type MovementUpdateManyWithoutCenterOfCostNestedInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutCenterOfCostInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutCenterOfCostInput>>;
  createMany?: InputMaybe<MovementCreateManyCenterOfCostInputEnvelope>;
  delete?: InputMaybe<Array<MovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  set?: InputMaybe<Array<MovementWhereUniqueInput>>;
  update?: InputMaybe<Array<MovementUpdateWithWhereUniqueWithoutCenterOfCostInput>>;
  updateMany?: InputMaybe<Array<MovementUpdateManyWithWhereWithoutCenterOfCostInput>>;
  upsert?: InputMaybe<Array<MovementUpsertWithWhereUniqueWithoutCenterOfCostInput>>;
};

export type MovementUpdateManyWithoutDestinationCityNestedInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutDestinationCityInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutDestinationCityInput>>;
  createMany?: InputMaybe<MovementCreateManyDestinationCityInputEnvelope>;
  delete?: InputMaybe<Array<MovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  set?: InputMaybe<Array<MovementWhereUniqueInput>>;
  update?: InputMaybe<Array<MovementUpdateWithWhereUniqueWithoutDestinationCityInput>>;
  updateMany?: InputMaybe<Array<MovementUpdateManyWithWhereWithoutDestinationCityInput>>;
  upsert?: InputMaybe<Array<MovementUpsertWithWhereUniqueWithoutDestinationCityInput>>;
};

export type MovementUpdateManyWithoutFileNestedInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutFileInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutFileInput>>;
  createMany?: InputMaybe<MovementCreateManyFileInputEnvelope>;
  delete?: InputMaybe<Array<MovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  set?: InputMaybe<Array<MovementWhereUniqueInput>>;
  update?: InputMaybe<Array<MovementUpdateWithWhereUniqueWithoutFileInput>>;
  updateMany?: InputMaybe<Array<MovementUpdateManyWithWhereWithoutFileInput>>;
  upsert?: InputMaybe<Array<MovementUpsertWithWhereUniqueWithoutFileInput>>;
};

export type MovementUpdateManyWithoutOriginCityNestedInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutOriginCityInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutOriginCityInput>>;
  createMany?: InputMaybe<MovementCreateManyOriginCityInputEnvelope>;
  delete?: InputMaybe<Array<MovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  set?: InputMaybe<Array<MovementWhereUniqueInput>>;
  update?: InputMaybe<Array<MovementUpdateWithWhereUniqueWithoutOriginCityInput>>;
  updateMany?: InputMaybe<Array<MovementUpdateManyWithWhereWithoutOriginCityInput>>;
  upsert?: InputMaybe<Array<MovementUpsertWithWhereUniqueWithoutOriginCityInput>>;
};

export type MovementUpdateManyWithoutPostalCardNestedInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutPostalCardInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutPostalCardInput>>;
  createMany?: InputMaybe<MovementCreateManyPostalCardInputEnvelope>;
  delete?: InputMaybe<Array<MovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  set?: InputMaybe<Array<MovementWhereUniqueInput>>;
  update?: InputMaybe<Array<MovementUpdateWithWhereUniqueWithoutPostalCardInput>>;
  updateMany?: InputMaybe<Array<MovementUpdateManyWithWhereWithoutPostalCardInput>>;
  upsert?: InputMaybe<Array<MovementUpsertWithWhereUniqueWithoutPostalCardInput>>;
};

export type MovementUpdateManyWithoutPostingUnitNestedInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutPostingUnitInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutPostingUnitInput>>;
  createMany?: InputMaybe<MovementCreateManyPostingUnitInputEnvelope>;
  delete?: InputMaybe<Array<MovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  set?: InputMaybe<Array<MovementWhereUniqueInput>>;
  update?: InputMaybe<Array<MovementUpdateWithWhereUniqueWithoutPostingUnitInput>>;
  updateMany?: InputMaybe<Array<MovementUpdateManyWithWhereWithoutPostingUnitInput>>;
  upsert?: InputMaybe<Array<MovementUpsertWithWhereUniqueWithoutPostingUnitInput>>;
};

export type MovementUpdateManyWithoutServiceNestedInput = {
  connect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovementCreateOrConnectWithoutServiceInput>>;
  create?: InputMaybe<Array<MovementCreateWithoutServiceInput>>;
  createMany?: InputMaybe<MovementCreateManyServiceInputEnvelope>;
  delete?: InputMaybe<Array<MovementWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovementScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovementWhereUniqueInput>>;
  set?: InputMaybe<Array<MovementWhereUniqueInput>>;
  update?: InputMaybe<Array<MovementUpdateWithWhereUniqueWithoutServiceInput>>;
  updateMany?: InputMaybe<Array<MovementUpdateManyWithWhereWithoutServiceInput>>;
  upsert?: InputMaybe<Array<MovementUpsertWithWhereUniqueWithoutServiceInput>>;
};

export type MovementUpdateWithWhereUniqueWithoutCenterOfCostInput = {
  data: MovementUpdateWithoutCenterOfCostInput;
  where: MovementWhereUniqueInput;
};

export type MovementUpdateWithWhereUniqueWithoutDestinationCityInput = {
  data: MovementUpdateWithoutDestinationCityInput;
  where: MovementWhereUniqueInput;
};

export type MovementUpdateWithWhereUniqueWithoutFileInput = {
  data: MovementUpdateWithoutFileInput;
  where: MovementWhereUniqueInput;
};

export type MovementUpdateWithWhereUniqueWithoutOriginCityInput = {
  data: MovementUpdateWithoutOriginCityInput;
  where: MovementWhereUniqueInput;
};

export type MovementUpdateWithWhereUniqueWithoutPostalCardInput = {
  data: MovementUpdateWithoutPostalCardInput;
  where: MovementWhereUniqueInput;
};

export type MovementUpdateWithWhereUniqueWithoutPostingUnitInput = {
  data: MovementUpdateWithoutPostingUnitInput;
  where: MovementWhereUniqueInput;
};

export type MovementUpdateWithWhereUniqueWithoutServiceInput = {
  data: MovementUpdateWithoutServiceInput;
  where: MovementWhereUniqueInput;
};

export type MovementUpdateWithoutCenterOfCostInput = {
  additionalServiceCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  declaredValue?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  destinationCity?: InputMaybe<CityUpdateOneWithoutDestinationOriginCityNestedInput>;
  destinationPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  diameter?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  documentNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  file?: InputMaybe<FileUpdateOneRequiredWithoutMovementsNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  itemQty?: InputMaybe<IntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  length?: InputMaybe<IntFieldUpdateOperationsInput>;
  operationalDiscountCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  originCity?: InputMaybe<CityUpdateOneWithoutMovementsOriginCityNestedInput>;
  originPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  postalCard?: InputMaybe<PostalCardUpdateOneRequiredWithoutMovementsNestedInput>;
  postingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  postingUnit?: InputMaybe<PostingUnitUpdateOneRequiredWithoutMovementsNestedInput>;
  realWeight?: InputMaybe<IntFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneRequiredWithoutMovementsNestedInput>;
  serviceValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unitCost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<IntFieldUpdateOperationsInput>;
  width?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type MovementUpdateWithoutDestinationCityInput = {
  additionalServiceCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  centerOfCost?: InputMaybe<CompanyUpdateOneRequiredWithoutMovementsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  declaredValue?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  destinationPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  diameter?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  documentNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  file?: InputMaybe<FileUpdateOneRequiredWithoutMovementsNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  itemQty?: InputMaybe<IntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  length?: InputMaybe<IntFieldUpdateOperationsInput>;
  operationalDiscountCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  originCity?: InputMaybe<CityUpdateOneWithoutMovementsOriginCityNestedInput>;
  originPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  postalCard?: InputMaybe<PostalCardUpdateOneRequiredWithoutMovementsNestedInput>;
  postingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  postingUnit?: InputMaybe<PostingUnitUpdateOneRequiredWithoutMovementsNestedInput>;
  realWeight?: InputMaybe<IntFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneRequiredWithoutMovementsNestedInput>;
  serviceValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unitCost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<IntFieldUpdateOperationsInput>;
  width?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type MovementUpdateWithoutFileInput = {
  additionalServiceCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  centerOfCost?: InputMaybe<CompanyUpdateOneRequiredWithoutMovementsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  declaredValue?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  destinationCity?: InputMaybe<CityUpdateOneWithoutDestinationOriginCityNestedInput>;
  destinationPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  diameter?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  documentNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  itemQty?: InputMaybe<IntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  length?: InputMaybe<IntFieldUpdateOperationsInput>;
  operationalDiscountCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  originCity?: InputMaybe<CityUpdateOneWithoutMovementsOriginCityNestedInput>;
  originPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  postalCard?: InputMaybe<PostalCardUpdateOneRequiredWithoutMovementsNestedInput>;
  postingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  postingUnit?: InputMaybe<PostingUnitUpdateOneRequiredWithoutMovementsNestedInput>;
  realWeight?: InputMaybe<IntFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneRequiredWithoutMovementsNestedInput>;
  serviceValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unitCost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<IntFieldUpdateOperationsInput>;
  width?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type MovementUpdateWithoutOriginCityInput = {
  additionalServiceCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  centerOfCost?: InputMaybe<CompanyUpdateOneRequiredWithoutMovementsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  declaredValue?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  destinationCity?: InputMaybe<CityUpdateOneWithoutDestinationOriginCityNestedInput>;
  destinationPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  diameter?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  documentNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  file?: InputMaybe<FileUpdateOneRequiredWithoutMovementsNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  itemQty?: InputMaybe<IntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  length?: InputMaybe<IntFieldUpdateOperationsInput>;
  operationalDiscountCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  originPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  postalCard?: InputMaybe<PostalCardUpdateOneRequiredWithoutMovementsNestedInput>;
  postingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  postingUnit?: InputMaybe<PostingUnitUpdateOneRequiredWithoutMovementsNestedInput>;
  realWeight?: InputMaybe<IntFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneRequiredWithoutMovementsNestedInput>;
  serviceValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unitCost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<IntFieldUpdateOperationsInput>;
  width?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type MovementUpdateWithoutPostalCardInput = {
  additionalServiceCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  centerOfCost?: InputMaybe<CompanyUpdateOneRequiredWithoutMovementsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  declaredValue?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  destinationCity?: InputMaybe<CityUpdateOneWithoutDestinationOriginCityNestedInput>;
  destinationPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  diameter?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  documentNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  file?: InputMaybe<FileUpdateOneRequiredWithoutMovementsNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  itemQty?: InputMaybe<IntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  length?: InputMaybe<IntFieldUpdateOperationsInput>;
  operationalDiscountCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  originCity?: InputMaybe<CityUpdateOneWithoutMovementsOriginCityNestedInput>;
  originPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  postingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  postingUnit?: InputMaybe<PostingUnitUpdateOneRequiredWithoutMovementsNestedInput>;
  realWeight?: InputMaybe<IntFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneRequiredWithoutMovementsNestedInput>;
  serviceValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unitCost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<IntFieldUpdateOperationsInput>;
  width?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type MovementUpdateWithoutPostingUnitInput = {
  additionalServiceCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  centerOfCost?: InputMaybe<CompanyUpdateOneRequiredWithoutMovementsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  declaredValue?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  destinationCity?: InputMaybe<CityUpdateOneWithoutDestinationOriginCityNestedInput>;
  destinationPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  diameter?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  documentNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  file?: InputMaybe<FileUpdateOneRequiredWithoutMovementsNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  itemQty?: InputMaybe<IntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  length?: InputMaybe<IntFieldUpdateOperationsInput>;
  operationalDiscountCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  originCity?: InputMaybe<CityUpdateOneWithoutMovementsOriginCityNestedInput>;
  originPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  postalCard?: InputMaybe<PostalCardUpdateOneRequiredWithoutMovementsNestedInput>;
  postingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  realWeight?: InputMaybe<IntFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneRequiredWithoutMovementsNestedInput>;
  serviceValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unitCost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<IntFieldUpdateOperationsInput>;
  width?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type MovementUpdateWithoutServiceInput = {
  additionalServiceCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  centerOfCost?: InputMaybe<CompanyUpdateOneRequiredWithoutMovementsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  declaredValue?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  destinationCity?: InputMaybe<CityUpdateOneWithoutDestinationOriginCityNestedInput>;
  destinationPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  diameter?: InputMaybe<IntFieldUpdateOperationsInput>;
  discountValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  documentNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  file?: InputMaybe<FileUpdateOneRequiredWithoutMovementsNestedInput>;
  height?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  itemQty?: InputMaybe<IntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  length?: InputMaybe<IntFieldUpdateOperationsInput>;
  operationalDiscountCode?: InputMaybe<IntFieldUpdateOperationsInput>;
  originCity?: InputMaybe<CityUpdateOneWithoutMovementsOriginCityNestedInput>;
  originPostalCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  postalCard?: InputMaybe<PostalCardUpdateOneRequiredWithoutMovementsNestedInput>;
  postingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  postingUnit?: InputMaybe<PostingUnitUpdateOneRequiredWithoutMovementsNestedInput>;
  realWeight?: InputMaybe<IntFieldUpdateOperationsInput>;
  serviceValue?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  unitCost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<IntFieldUpdateOperationsInput>;
  width?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type MovementUpsertWithWhereUniqueWithoutCenterOfCostInput = {
  create: MovementCreateWithoutCenterOfCostInput;
  update: MovementUpdateWithoutCenterOfCostInput;
  where: MovementWhereUniqueInput;
};

export type MovementUpsertWithWhereUniqueWithoutDestinationCityInput = {
  create: MovementCreateWithoutDestinationCityInput;
  update: MovementUpdateWithoutDestinationCityInput;
  where: MovementWhereUniqueInput;
};

export type MovementUpsertWithWhereUniqueWithoutFileInput = {
  create: MovementCreateWithoutFileInput;
  update: MovementUpdateWithoutFileInput;
  where: MovementWhereUniqueInput;
};

export type MovementUpsertWithWhereUniqueWithoutOriginCityInput = {
  create: MovementCreateWithoutOriginCityInput;
  update: MovementUpdateWithoutOriginCityInput;
  where: MovementWhereUniqueInput;
};

export type MovementUpsertWithWhereUniqueWithoutPostalCardInput = {
  create: MovementCreateWithoutPostalCardInput;
  update: MovementUpdateWithoutPostalCardInput;
  where: MovementWhereUniqueInput;
};

export type MovementUpsertWithWhereUniqueWithoutPostingUnitInput = {
  create: MovementCreateWithoutPostingUnitInput;
  update: MovementUpdateWithoutPostingUnitInput;
  where: MovementWhereUniqueInput;
};

export type MovementUpsertWithWhereUniqueWithoutServiceInput = {
  create: MovementCreateWithoutServiceInput;
  update: MovementUpdateWithoutServiceInput;
  where: MovementWhereUniqueInput;
};

export type MovementWhereInput = {
  AND?: InputMaybe<Array<MovementWhereInput>>;
  NOT?: InputMaybe<Array<MovementWhereInput>>;
  OR?: InputMaybe<Array<MovementWhereInput>>;
  additionalServiceCode?: InputMaybe<IntFilter>;
  centerOfCost?: InputMaybe<CompanyRelationFilter>;
  centerOfCostId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  declaredValue?: InputMaybe<DecimalNullableFilter>;
  destinationCity?: InputMaybe<CityRelationFilter>;
  destinationCityId?: InputMaybe<IntNullableFilter>;
  destinationPostalCode?: InputMaybe<StringFilter>;
  diameter?: InputMaybe<IntFilter>;
  discountValue?: InputMaybe<DecimalFilter>;
  documentNumber?: InputMaybe<StringFilter>;
  file?: InputMaybe<FileRelationFilter>;
  fileId?: InputMaybe<IntFilter>;
  height?: InputMaybe<IntFilter>;
  id?: InputMaybe<BigIntFilter>;
  itemQty?: InputMaybe<IntFilter>;
  label?: InputMaybe<StringFilter>;
  length?: InputMaybe<IntFilter>;
  operationalDiscountCode?: InputMaybe<IntFilter>;
  originCity?: InputMaybe<CityRelationFilter>;
  originCityId?: InputMaybe<IntNullableFilter>;
  originPostalCode?: InputMaybe<StringFilter>;
  postalCard?: InputMaybe<PostalCardRelationFilter>;
  postalCardId?: InputMaybe<IntFilter>;
  postingDate?: InputMaybe<DateTimeFilter>;
  postingUnit?: InputMaybe<PostingUnitRelationFilter>;
  postingUnitId?: InputMaybe<IntFilter>;
  realWeight?: InputMaybe<IntFilter>;
  service?: InputMaybe<ServiceRelationFilter>;
  serviceId?: InputMaybe<IntFilter>;
  serviceValue?: InputMaybe<DecimalFilter>;
  unitCost?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  weight?: InputMaybe<IntFilter>;
  width?: InputMaybe<IntFilter>;
};

export type MovementWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyCity: AffectedRowsOutput;
  createManyCompany: AffectedRowsOutput;
  createManyCredits: AffectedRowsOutput;
  createManyDebits: AffectedRowsOutput;
  createManyFile: AffectedRowsOutput;
  createManyMovement: AffectedRowsOutput;
  createManyPostalCard: AffectedRowsOutput;
  createManyPostingUnit: AffectedRowsOutput;
  createManyService: AffectedRowsOutput;
  createManyState: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneCity: City;
  createOneCompany: Company;
  createOneCredits: Credits;
  createOneDebits: Debits;
  createOneFile: File;
  createOneMovement: Movement;
  createOnePostalCard: PostalCard;
  createOnePostingUnit: PostingUnit;
  createOneService: Service;
  createOneState: State;
  createOneUser: User;
  deleteManyCity: AffectedRowsOutput;
  deleteManyCompany: AffectedRowsOutput;
  deleteManyCredits: AffectedRowsOutput;
  deleteManyDebits: AffectedRowsOutput;
  deleteManyFile: AffectedRowsOutput;
  deleteManyMovement: AffectedRowsOutput;
  deleteManyPostalCard: AffectedRowsOutput;
  deleteManyPostingUnit: AffectedRowsOutput;
  deleteManyService: AffectedRowsOutput;
  deleteManyState: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneCity?: Maybe<City>;
  deleteOneCompany?: Maybe<Company>;
  deleteOneCredits?: Maybe<Credits>;
  deleteOneDebits?: Maybe<Debits>;
  deleteOneFile?: Maybe<File>;
  deleteOneMovement?: Maybe<Movement>;
  deleteOnePostalCard?: Maybe<PostalCard>;
  deleteOnePostingUnit?: Maybe<PostingUnit>;
  deleteOneService?: Maybe<Service>;
  deleteOneState?: Maybe<State>;
  deleteOneUser?: Maybe<User>;
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  register?: Maybe<User>;
  updateManyCity: AffectedRowsOutput;
  updateManyCompany: AffectedRowsOutput;
  updateManyCredits: AffectedRowsOutput;
  updateManyDebits: AffectedRowsOutput;
  updateManyFile: AffectedRowsOutput;
  updateManyMovement: AffectedRowsOutput;
  updateManyPostalCard: AffectedRowsOutput;
  updateManyPostingUnit: AffectedRowsOutput;
  updateManyService: AffectedRowsOutput;
  updateManyState: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneCity?: Maybe<City>;
  updateOneCompany?: Maybe<Company>;
  updateOneCredits?: Maybe<Credits>;
  updateOneDebits?: Maybe<Debits>;
  updateOneFile?: Maybe<File>;
  updateOneMovement?: Maybe<Movement>;
  updateOnePostalCard?: Maybe<PostalCard>;
  updateOnePostingUnit?: Maybe<PostingUnit>;
  updateOneService?: Maybe<Service>;
  updateOneState?: Maybe<State>;
  updateOneUser?: Maybe<User>;
  upsertOneCity: City;
  upsertOneCompany: Company;
  upsertOneCredits: Credits;
  upsertOneDebits: Debits;
  upsertOneFile: File;
  upsertOneMovement: Movement;
  upsertOnePostalCard: PostalCard;
  upsertOnePostingUnit: PostingUnit;
  upsertOneService: Service;
  upsertOneState: State;
  upsertOneUser: User;
};


export type MutationCreateManyCityArgs = {
  data: Array<CityCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCompanyArgs = {
  data: Array<CompanyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCreditsArgs = {
  data: Array<CreditsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyDebitsArgs = {
  data: Array<DebitsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFileArgs = {
  data: Array<FileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyMovementArgs = {
  data: Array<MovementCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPostalCardArgs = {
  data: Array<PostalCardCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPostingUnitArgs = {
  data: Array<PostingUnitCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyServiceArgs = {
  data: Array<ServiceCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyStateArgs = {
  data: Array<StateCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneCityArgs = {
  data: CityCreateInput;
};


export type MutationCreateOneCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationCreateOneCreditsArgs = {
  data: CreditsCreateInput;
};


export type MutationCreateOneDebitsArgs = {
  data: DebitsCreateInput;
};


export type MutationCreateOneFileArgs = {
  data: FileCreateInput;
};


export type MutationCreateOneMovementArgs = {
  data: MovementCreateInput;
};


export type MutationCreateOnePostalCardArgs = {
  data: PostalCardCreateInput;
};


export type MutationCreateOnePostingUnitArgs = {
  data: PostingUnitCreateInput;
};


export type MutationCreateOneServiceArgs = {
  data: ServiceCreateInput;
};


export type MutationCreateOneStateArgs = {
  data: StateCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCityArgs = {
  where?: InputMaybe<CityWhereInput>;
};


export type MutationDeleteManyCompanyArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};


export type MutationDeleteManyCreditsArgs = {
  where?: InputMaybe<CreditsWhereInput>;
};


export type MutationDeleteManyDebitsArgs = {
  where?: InputMaybe<DebitsWhereInput>;
};


export type MutationDeleteManyFileArgs = {
  where?: InputMaybe<FileWhereInput>;
};


export type MutationDeleteManyMovementArgs = {
  where?: InputMaybe<MovementWhereInput>;
};


export type MutationDeleteManyPostalCardArgs = {
  where?: InputMaybe<PostalCardWhereInput>;
};


export type MutationDeleteManyPostingUnitArgs = {
  where?: InputMaybe<PostingUnitWhereInput>;
};


export type MutationDeleteManyServiceArgs = {
  where?: InputMaybe<ServiceWhereInput>;
};


export type MutationDeleteManyStateArgs = {
  where?: InputMaybe<StateWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneCityArgs = {
  where: CityWhereUniqueInput;
};


export type MutationDeleteOneCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type MutationDeleteOneCreditsArgs = {
  where: CreditsWhereUniqueInput;
};


export type MutationDeleteOneDebitsArgs = {
  where: DebitsWhereUniqueInput;
};


export type MutationDeleteOneFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationDeleteOneMovementArgs = {
  where: MovementWhereUniqueInput;
};


export type MutationDeleteOnePostalCardArgs = {
  where: PostalCardWhereUniqueInput;
};


export type MutationDeleteOnePostingUnitArgs = {
  where: PostingUnitWhereUniqueInput;
};


export type MutationDeleteOneServiceArgs = {
  where: ServiceWhereUniqueInput;
};


export type MutationDeleteOneStateArgs = {
  where: StateWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  remember: Scalars['Boolean'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UserCreateInput;
};


export type MutationUpdateManyCityArgs = {
  data: CityUpdateManyMutationInput;
  where?: InputMaybe<CityWhereInput>;
};


export type MutationUpdateManyCompanyArgs = {
  data: CompanyUpdateManyMutationInput;
  where?: InputMaybe<CompanyWhereInput>;
};


export type MutationUpdateManyCreditsArgs = {
  data: CreditsUpdateManyMutationInput;
  where?: InputMaybe<CreditsWhereInput>;
};


export type MutationUpdateManyDebitsArgs = {
  data: DebitsUpdateManyMutationInput;
  where?: InputMaybe<DebitsWhereInput>;
};


export type MutationUpdateManyFileArgs = {
  data: FileUpdateManyMutationInput;
  where?: InputMaybe<FileWhereInput>;
};


export type MutationUpdateManyMovementArgs = {
  data: MovementUpdateManyMutationInput;
  where?: InputMaybe<MovementWhereInput>;
};


export type MutationUpdateManyPostalCardArgs = {
  data: PostalCardUpdateManyMutationInput;
  where?: InputMaybe<PostalCardWhereInput>;
};


export type MutationUpdateManyPostingUnitArgs = {
  data: PostingUnitUpdateManyMutationInput;
  where?: InputMaybe<PostingUnitWhereInput>;
};


export type MutationUpdateManyServiceArgs = {
  data: ServiceUpdateManyMutationInput;
  where?: InputMaybe<ServiceWhereInput>;
};


export type MutationUpdateManyStateArgs = {
  data: StateUpdateManyMutationInput;
  where?: InputMaybe<StateWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneCityArgs = {
  data: CityUpdateInput;
  where: CityWhereUniqueInput;
};


export type MutationUpdateOneCompanyArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateOneCreditsArgs = {
  data: CreditsUpdateInput;
  where: CreditsWhereUniqueInput;
};


export type MutationUpdateOneDebitsArgs = {
  data: DebitsUpdateInput;
  where: DebitsWhereUniqueInput;
};


export type MutationUpdateOneFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpdateOneMovementArgs = {
  data: MovementUpdateInput;
  where: MovementWhereUniqueInput;
};


export type MutationUpdateOnePostalCardArgs = {
  data: PostalCardUpdateInput;
  where: PostalCardWhereUniqueInput;
};


export type MutationUpdateOnePostingUnitArgs = {
  data: PostingUnitUpdateInput;
  where: PostingUnitWhereUniqueInput;
};


export type MutationUpdateOneServiceArgs = {
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};


export type MutationUpdateOneStateArgs = {
  data: StateUpdateInput;
  where: StateWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneCityArgs = {
  create: CityCreateInput;
  update: CityUpdateInput;
  where: CityWhereUniqueInput;
};


export type MutationUpsertOneCompanyArgs = {
  create: CompanyCreateInput;
  update: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpsertOneCreditsArgs = {
  create: CreditsCreateInput;
  update: CreditsUpdateInput;
  where: CreditsWhereUniqueInput;
};


export type MutationUpsertOneDebitsArgs = {
  create: DebitsCreateInput;
  update: DebitsUpdateInput;
  where: DebitsWhereUniqueInput;
};


export type MutationUpsertOneFileArgs = {
  create: FileCreateInput;
  update: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpsertOneMovementArgs = {
  create: MovementCreateInput;
  update: MovementUpdateInput;
  where: MovementWhereUniqueInput;
};


export type MutationUpsertOnePostalCardArgs = {
  create: PostalCardCreateInput;
  update: PostalCardUpdateInput;
  where: PostalCardWhereUniqueInput;
};


export type MutationUpsertOnePostingUnitArgs = {
  create: PostingUnitCreateInput;
  update: PostingUnitUpdateInput;
  where: PostingUnitWhereUniqueInput;
};


export type MutationUpsertOneServiceArgs = {
  create: ServiceCreateInput;
  update: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};


export type MutationUpsertOneStateArgs = {
  create: StateCreateInput;
  update: StateUpdateInput;
  where: StateWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type NestedBigIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBigIntFilter>;
  _min?: InputMaybe<NestedBigIntFilter>;
  _sum?: InputMaybe<NestedBigIntFilter>;
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalNullableFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDecimalNullableFilter>;
  _min?: InputMaybe<NestedDecimalNullableFilter>;
  _sum?: InputMaybe<NestedDecimalNullableFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedEnumFileTypesFilter = {
  equals?: InputMaybe<FileTypes>;
  in?: InputMaybe<Array<FileTypes>>;
  not?: InputMaybe<NestedEnumFileTypesFilter>;
  notIn?: InputMaybe<Array<FileTypes>>;
};

export type NestedEnumFileTypesWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumFileTypesFilter>;
  _min?: InputMaybe<NestedEnumFileTypesFilter>;
  equals?: InputMaybe<FileTypes>;
  in?: InputMaybe<Array<FileTypes>>;
  not?: InputMaybe<NestedEnumFileTypesWithAggregatesFilter>;
  notIn?: InputMaybe<Array<FileTypes>>;
};

export type NestedEnumRolesFilter = {
  equals?: InputMaybe<Roles>;
  in?: InputMaybe<Array<Roles>>;
  not?: InputMaybe<NestedEnumRolesFilter>;
  notIn?: InputMaybe<Array<Roles>>;
};

export type NestedEnumRolesWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRolesFilter>;
  _min?: InputMaybe<NestedEnumRolesFilter>;
  equals?: InputMaybe<Roles>;
  in?: InputMaybe<Array<Roles>>;
  not?: InputMaybe<NestedEnumRolesWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Roles>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableDecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']>;
  divide?: InputMaybe<Scalars['Decimal']>;
  increment?: InputMaybe<Scalars['Decimal']>;
  multiply?: InputMaybe<Scalars['Decimal']>;
  set?: InputMaybe<Scalars['Decimal']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export enum Permissions {
  Create = 'CREATE',
  Delete = 'DELETE',
  Read = 'READ',
  Update = 'UPDATE'
}

export type PostalCard = {
  __typename?: 'PostalCard';
  _count?: Maybe<PostalCardCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  movements: Array<Movement>;
  number: Scalars['String'];
  owner: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type PostalCardMovementsArgs = {
  cursor?: InputMaybe<MovementWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovementScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovementOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovementWhereInput>;
};

export type PostalCardAvgAggregate = {
  __typename?: 'PostalCardAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PostalCardAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PostalCardCount = {
  __typename?: 'PostalCardCount';
  movements: Scalars['Int'];
};

export type PostalCardCountAggregate = {
  __typename?: 'PostalCardCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  number: Scalars['Int'];
  owner: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PostalCardCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostalCardCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movements?: InputMaybe<MovementCreateNestedManyWithoutPostalCardInput>;
  number: Scalars['String'];
  owner: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PostalCardCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  number: Scalars['String'];
  owner: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PostalCardCreateNestedOneWithoutMovementsInput = {
  connect?: InputMaybe<PostalCardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostalCardCreateOrConnectWithoutMovementsInput>;
  create?: InputMaybe<PostalCardCreateWithoutMovementsInput>;
};

export type PostalCardCreateOrConnectWithoutMovementsInput = {
  create: PostalCardCreateWithoutMovementsInput;
  where: PostalCardWhereUniqueInput;
};

export type PostalCardCreateWithoutMovementsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  number: Scalars['String'];
  owner: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PostalCardGroupBy = {
  __typename?: 'PostalCardGroupBy';
  _avg?: Maybe<PostalCardAvgAggregate>;
  _count?: Maybe<PostalCardCountAggregate>;
  _max?: Maybe<PostalCardMaxAggregate>;
  _min?: Maybe<PostalCardMinAggregate>;
  _sum?: Maybe<PostalCardSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  number: Scalars['String'];
  owner: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PostalCardMaxAggregate = {
  __typename?: 'PostalCardMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostalCardMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostalCardMinAggregate = {
  __typename?: 'PostalCardMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostalCardMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostalCardOrderByWithAggregationInput = {
  _avg?: InputMaybe<PostalCardAvgOrderByAggregateInput>;
  _count?: InputMaybe<PostalCardCountOrderByAggregateInput>;
  _max?: InputMaybe<PostalCardMaxOrderByAggregateInput>;
  _min?: InputMaybe<PostalCardMinOrderByAggregateInput>;
  _sum?: InputMaybe<PostalCardSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostalCardOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movements?: InputMaybe<MovementOrderByRelationAggregateInput>;
  number?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostalCardRelationFilter = {
  is?: InputMaybe<PostalCardWhereInput>;
  isNot?: InputMaybe<PostalCardWhereInput>;
};

export enum PostalCardScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Number = 'number',
  Owner = 'owner',
  UpdatedAt = 'updatedAt'
}

export type PostalCardScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PostalCardScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PostalCardScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PostalCardScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  number?: InputMaybe<StringWithAggregatesFilter>;
  owner?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PostalCardSumAggregate = {
  __typename?: 'PostalCardSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PostalCardSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PostalCardUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movements?: InputMaybe<MovementUpdateManyWithoutPostalCardNestedInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostalCardUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostalCardUpdateOneRequiredWithoutMovementsNestedInput = {
  connect?: InputMaybe<PostalCardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostalCardCreateOrConnectWithoutMovementsInput>;
  create?: InputMaybe<PostalCardCreateWithoutMovementsInput>;
  update?: InputMaybe<PostalCardUpdateWithoutMovementsInput>;
  upsert?: InputMaybe<PostalCardUpsertWithoutMovementsInput>;
};

export type PostalCardUpdateWithoutMovementsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostalCardUpsertWithoutMovementsInput = {
  create: PostalCardCreateWithoutMovementsInput;
  update: PostalCardUpdateWithoutMovementsInput;
};

export type PostalCardWhereInput = {
  AND?: InputMaybe<Array<PostalCardWhereInput>>;
  NOT?: InputMaybe<Array<PostalCardWhereInput>>;
  OR?: InputMaybe<Array<PostalCardWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  movements?: InputMaybe<MovementListRelationFilter>;
  number?: InputMaybe<StringFilter>;
  owner?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostalCardWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  number?: InputMaybe<Scalars['String']>;
};

export type PostingUnit = {
  __typename?: 'PostingUnit';
  _count?: Maybe<PostingUnitCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  movements: Array<Movement>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type PostingUnitMovementsArgs = {
  cursor?: InputMaybe<MovementWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovementScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovementOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovementWhereInput>;
};

export type PostingUnitAvgAggregate = {
  __typename?: 'PostingUnitAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PostingUnitAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PostingUnitCount = {
  __typename?: 'PostingUnitCount';
  movements: Scalars['Int'];
};

export type PostingUnitCountAggregate = {
  __typename?: 'PostingUnitCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PostingUnitCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostingUnitCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movements?: InputMaybe<MovementCreateNestedManyWithoutPostingUnitInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PostingUnitCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PostingUnitCreateNestedOneWithoutMovementsInput = {
  connect?: InputMaybe<PostingUnitWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostingUnitCreateOrConnectWithoutMovementsInput>;
  create?: InputMaybe<PostingUnitCreateWithoutMovementsInput>;
};

export type PostingUnitCreateOrConnectWithoutMovementsInput = {
  create: PostingUnitCreateWithoutMovementsInput;
  where: PostingUnitWhereUniqueInput;
};

export type PostingUnitCreateWithoutMovementsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PostingUnitGroupBy = {
  __typename?: 'PostingUnitGroupBy';
  _avg?: Maybe<PostingUnitAvgAggregate>;
  _count?: Maybe<PostingUnitCountAggregate>;
  _max?: Maybe<PostingUnitMaxAggregate>;
  _min?: Maybe<PostingUnitMinAggregate>;
  _sum?: Maybe<PostingUnitSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PostingUnitMaxAggregate = {
  __typename?: 'PostingUnitMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostingUnitMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostingUnitMinAggregate = {
  __typename?: 'PostingUnitMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostingUnitMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostingUnitOrderByWithAggregationInput = {
  _avg?: InputMaybe<PostingUnitAvgOrderByAggregateInput>;
  _count?: InputMaybe<PostingUnitCountOrderByAggregateInput>;
  _max?: InputMaybe<PostingUnitMaxOrderByAggregateInput>;
  _min?: InputMaybe<PostingUnitMinOrderByAggregateInput>;
  _sum?: InputMaybe<PostingUnitSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostingUnitOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movements?: InputMaybe<MovementOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostingUnitRelationFilter = {
  is?: InputMaybe<PostingUnitWhereInput>;
  isNot?: InputMaybe<PostingUnitWhereInput>;
};

export enum PostingUnitScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type PostingUnitScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PostingUnitScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PostingUnitScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PostingUnitScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PostingUnitSumAggregate = {
  __typename?: 'PostingUnitSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PostingUnitSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PostingUnitUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movements?: InputMaybe<MovementUpdateManyWithoutPostingUnitNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostingUnitUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostingUnitUpdateOneRequiredWithoutMovementsNestedInput = {
  connect?: InputMaybe<PostingUnitWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostingUnitCreateOrConnectWithoutMovementsInput>;
  create?: InputMaybe<PostingUnitCreateWithoutMovementsInput>;
  update?: InputMaybe<PostingUnitUpdateWithoutMovementsInput>;
  upsert?: InputMaybe<PostingUnitUpsertWithoutMovementsInput>;
};

export type PostingUnitUpdateWithoutMovementsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostingUnitUpsertWithoutMovementsInput = {
  create: PostingUnitCreateWithoutMovementsInput;
  update: PostingUnitUpdateWithoutMovementsInput;
};

export type PostingUnitWhereInput = {
  AND?: InputMaybe<Array<PostingUnitWhereInput>>;
  NOT?: InputMaybe<Array<PostingUnitWhereInput>>;
  OR?: InputMaybe<Array<PostingUnitWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  movements?: InputMaybe<MovementListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostingUnitWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCity: AggregateCity;
  aggregateCompany: AggregateCompany;
  aggregateCredits: AggregateCredits;
  aggregateDebits: AggregateDebits;
  aggregateFile: AggregateFile;
  aggregateMovement: AggregateMovement;
  aggregatePostalCard: AggregatePostalCard;
  aggregatePostingUnit: AggregatePostingUnit;
  aggregateService: AggregateService;
  aggregateState: AggregateState;
  aggregateUser: AggregateUser;
  cities: Array<City>;
  city?: Maybe<City>;
  companies: Array<Company>;
  company?: Maybe<Company>;
  file?: Maybe<File>;
  files: Array<File>;
  findFirstCity?: Maybe<City>;
  findFirstCompany?: Maybe<Company>;
  findFirstCredits?: Maybe<Credits>;
  findFirstDebits?: Maybe<Debits>;
  findFirstFile?: Maybe<File>;
  findFirstMovement?: Maybe<Movement>;
  findFirstPostalCard?: Maybe<PostalCard>;
  findFirstPostingUnit?: Maybe<PostingUnit>;
  findFirstService?: Maybe<Service>;
  findFirstState?: Maybe<State>;
  findFirstUser?: Maybe<User>;
  findManyCredits: Array<Credits>;
  findManyDebits: Array<Debits>;
  findUniqueCredits?: Maybe<Credits>;
  findUniqueDebits?: Maybe<Debits>;
  groupByCity: Array<CityGroupBy>;
  groupByCompany: Array<CompanyGroupBy>;
  groupByCredits: Array<CreditsGroupBy>;
  groupByDebits: Array<DebitsGroupBy>;
  groupByFile: Array<FileGroupBy>;
  groupByMovement: Array<MovementGroupBy>;
  groupByPostalCard: Array<PostalCardGroupBy>;
  groupByPostingUnit: Array<PostingUnitGroupBy>;
  groupByService: Array<ServiceGroupBy>;
  groupByState: Array<StateGroupBy>;
  groupByUser: Array<UserGroupBy>;
  me?: Maybe<User>;
  movement?: Maybe<Movement>;
  movements: Array<Movement>;
  postalCard?: Maybe<PostalCard>;
  postalCards: Array<PostalCard>;
  postingUnit?: Maybe<PostingUnit>;
  postingUnits: Array<PostingUnit>;
  service?: Maybe<Service>;
  services: Array<Service>;
  state?: Maybe<State>;
  states: Array<State>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateCityArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryAggregateCompanyArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryAggregateCreditsArgs = {
  cursor?: InputMaybe<CreditsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CreditsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CreditsWhereInput>;
};


export type QueryAggregateDebitsArgs = {
  cursor?: InputMaybe<DebitsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DebitsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DebitsWhereInput>;
};


export type QueryAggregateFileArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryAggregateMovementArgs = {
  cursor?: InputMaybe<MovementWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovementOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovementWhereInput>;
};


export type QueryAggregatePostalCardArgs = {
  cursor?: InputMaybe<PostalCardWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PostalCardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostalCardWhereInput>;
};


export type QueryAggregatePostingUnitArgs = {
  cursor?: InputMaybe<PostingUnitWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PostingUnitOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostingUnitWhereInput>;
};


export type QueryAggregateServiceArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ServiceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceWhereInput>;
};


export type QueryAggregateStateArgs = {
  cursor?: InputMaybe<StateWhereUniqueInput>;
  orderBy?: InputMaybe<Array<StateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StateWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryCitiesArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  distinct?: InputMaybe<Array<CityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryCityArgs = {
  where: CityWhereUniqueInput;
};


export type QueryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryFilesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstCityArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  distinct?: InputMaybe<Array<CityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryFindFirstCompanyArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryFindFirstCreditsArgs = {
  cursor?: InputMaybe<CreditsWhereUniqueInput>;
  distinct?: InputMaybe<Array<CreditsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CreditsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CreditsWhereInput>;
};


export type QueryFindFirstDebitsArgs = {
  cursor?: InputMaybe<DebitsWhereUniqueInput>;
  distinct?: InputMaybe<Array<DebitsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DebitsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DebitsWhereInput>;
};


export type QueryFindFirstFileArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstMovementArgs = {
  cursor?: InputMaybe<MovementWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovementScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovementOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovementWhereInput>;
};


export type QueryFindFirstPostalCardArgs = {
  cursor?: InputMaybe<PostalCardWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostalCardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostalCardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostalCardWhereInput>;
};


export type QueryFindFirstPostingUnitArgs = {
  cursor?: InputMaybe<PostingUnitWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostingUnitScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostingUnitOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostingUnitWhereInput>;
};


export type QueryFindFirstServiceArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ServiceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ServiceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceWhereInput>;
};


export type QueryFindFirstStateArgs = {
  cursor?: InputMaybe<StateWhereUniqueInput>;
  distinct?: InputMaybe<Array<StateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StateWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyCreditsArgs = {
  cursor?: InputMaybe<CreditsWhereUniqueInput>;
  distinct?: InputMaybe<Array<CreditsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CreditsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CreditsWhereInput>;
};


export type QueryFindManyDebitsArgs = {
  cursor?: InputMaybe<DebitsWhereUniqueInput>;
  distinct?: InputMaybe<Array<DebitsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DebitsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DebitsWhereInput>;
};


export type QueryFindUniqueCreditsArgs = {
  where: CreditsWhereUniqueInput;
};


export type QueryFindUniqueDebitsArgs = {
  where: DebitsWhereUniqueInput;
};


export type QueryGroupByCityArgs = {
  by: Array<CityScalarFieldEnum>;
  having?: InputMaybe<CityScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CityOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryGroupByCompanyArgs = {
  by: Array<CompanyScalarFieldEnum>;
  having?: InputMaybe<CompanyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryGroupByCreditsArgs = {
  by: Array<CreditsScalarFieldEnum>;
  having?: InputMaybe<CreditsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CreditsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CreditsWhereInput>;
};


export type QueryGroupByDebitsArgs = {
  by: Array<DebitsScalarFieldEnum>;
  having?: InputMaybe<DebitsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DebitsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DebitsWhereInput>;
};


export type QueryGroupByFileArgs = {
  by: Array<FileScalarFieldEnum>;
  having?: InputMaybe<FileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryGroupByMovementArgs = {
  by: Array<MovementScalarFieldEnum>;
  having?: InputMaybe<MovementScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovementOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovementWhereInput>;
};


export type QueryGroupByPostalCardArgs = {
  by: Array<PostalCardScalarFieldEnum>;
  having?: InputMaybe<PostalCardScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PostalCardOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostalCardWhereInput>;
};


export type QueryGroupByPostingUnitArgs = {
  by: Array<PostingUnitScalarFieldEnum>;
  having?: InputMaybe<PostingUnitScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PostingUnitOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostingUnitWhereInput>;
};


export type QueryGroupByServiceArgs = {
  by: Array<ServiceScalarFieldEnum>;
  having?: InputMaybe<ServiceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ServiceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceWhereInput>;
};


export type QueryGroupByStateArgs = {
  by: Array<StateScalarFieldEnum>;
  having?: InputMaybe<StateScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<StateOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StateWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryMovementArgs = {
  where: MovementWhereUniqueInput;
};


export type QueryMovementsArgs = {
  cursor?: InputMaybe<MovementWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovementScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovementOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovementWhereInput>;
};


export type QueryPostalCardArgs = {
  where: PostalCardWhereUniqueInput;
};


export type QueryPostalCardsArgs = {
  cursor?: InputMaybe<PostalCardWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostalCardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostalCardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostalCardWhereInput>;
};


export type QueryPostingUnitArgs = {
  where: PostingUnitWhereUniqueInput;
};


export type QueryPostingUnitsArgs = {
  cursor?: InputMaybe<PostingUnitWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostingUnitScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostingUnitOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostingUnitWhereInput>;
};


export type QueryServiceArgs = {
  where: ServiceWhereUniqueInput;
};


export type QueryServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ServiceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ServiceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceWhereInput>;
};


export type QueryStateArgs = {
  where: StateWhereUniqueInput;
};


export type QueryStatesArgs = {
  cursor?: InputMaybe<StateWhereUniqueInput>;
  distinct?: InputMaybe<Array<StateScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StateWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Roles {
  Admin = 'ADMIN',
  Leader = 'LEADER',
  Manager = 'MANAGER',
  Supervisor = 'SUPERVISOR',
  User = 'USER'
}

export type Service = {
  __typename?: 'Service';
  _count?: Maybe<ServiceCount>;
  code: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  movements: Array<Movement>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type ServiceMovementsArgs = {
  cursor?: InputMaybe<MovementWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovementScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovementOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovementWhereInput>;
};

export type ServiceAvgAggregate = {
  __typename?: 'ServiceAvgAggregate';
  code?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type ServiceAvgOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ServiceCount = {
  __typename?: 'ServiceCount';
  movements: Scalars['Int'];
};

export type ServiceCountAggregate = {
  __typename?: 'ServiceCountAggregate';
  _all: Scalars['Int'];
  code: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ServiceCountOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ServiceCreateInput = {
  code: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movements?: InputMaybe<MovementCreateNestedManyWithoutServiceInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ServiceCreateManyInput = {
  code: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ServiceCreateNestedOneWithoutMovementsInput = {
  connect?: InputMaybe<ServiceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ServiceCreateOrConnectWithoutMovementsInput>;
  create?: InputMaybe<ServiceCreateWithoutMovementsInput>;
};

export type ServiceCreateOrConnectWithoutMovementsInput = {
  create: ServiceCreateWithoutMovementsInput;
  where: ServiceWhereUniqueInput;
};

export type ServiceCreateWithoutMovementsInput = {
  code: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ServiceGroupBy = {
  __typename?: 'ServiceGroupBy';
  _avg?: Maybe<ServiceAvgAggregate>;
  _count?: Maybe<ServiceCountAggregate>;
  _max?: Maybe<ServiceMaxAggregate>;
  _min?: Maybe<ServiceMinAggregate>;
  _sum?: Maybe<ServiceSumAggregate>;
  code: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ServiceMaxAggregate = {
  __typename?: 'ServiceMaxAggregate';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ServiceMaxOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ServiceMinAggregate = {
  __typename?: 'ServiceMinAggregate';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ServiceMinOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ServiceOrderByWithAggregationInput = {
  _avg?: InputMaybe<ServiceAvgOrderByAggregateInput>;
  _count?: InputMaybe<ServiceCountOrderByAggregateInput>;
  _max?: InputMaybe<ServiceMaxOrderByAggregateInput>;
  _min?: InputMaybe<ServiceMinOrderByAggregateInput>;
  _sum?: InputMaybe<ServiceSumOrderByAggregateInput>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ServiceOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movements?: InputMaybe<MovementOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ServiceRelationFilter = {
  is?: InputMaybe<ServiceWhereInput>;
  isNot?: InputMaybe<ServiceWhereInput>;
};

export enum ServiceScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ServiceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ServiceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ServiceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ServiceScalarWhereWithAggregatesInput>>;
  code?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ServiceSumAggregate = {
  __typename?: 'ServiceSumAggregate';
  code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type ServiceSumOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ServiceUpdateInput = {
  code?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movements?: InputMaybe<MovementUpdateManyWithoutServiceNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ServiceUpdateManyMutationInput = {
  code?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ServiceUpdateOneRequiredWithoutMovementsNestedInput = {
  connect?: InputMaybe<ServiceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ServiceCreateOrConnectWithoutMovementsInput>;
  create?: InputMaybe<ServiceCreateWithoutMovementsInput>;
  update?: InputMaybe<ServiceUpdateWithoutMovementsInput>;
  upsert?: InputMaybe<ServiceUpsertWithoutMovementsInput>;
};

export type ServiceUpdateWithoutMovementsInput = {
  code?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ServiceUpsertWithoutMovementsInput = {
  create: ServiceCreateWithoutMovementsInput;
  update: ServiceUpdateWithoutMovementsInput;
};

export type ServiceWhereInput = {
  AND?: InputMaybe<Array<ServiceWhereInput>>;
  NOT?: InputMaybe<Array<ServiceWhereInput>>;
  OR?: InputMaybe<Array<ServiceWhereInput>>;
  code?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  movements?: InputMaybe<MovementListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ServiceWhereUniqueInput = {
  code?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type State = {
  __typename?: 'State';
  _count?: Maybe<StateCount>;
  cities: Array<City>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type StateCitiesArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  distinct?: InputMaybe<Array<CityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityWhereInput>;
};

export type StateAvgAggregate = {
  __typename?: 'StateAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type StateAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type StateCount = {
  __typename?: 'StateCount';
  cities: Scalars['Int'];
};

export type StateCountAggregate = {
  __typename?: 'StateCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type StateCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type StateCreateInput = {
  cities?: InputMaybe<CityCreateNestedManyWithoutStateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StateCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StateCreateNestedOneWithoutCitiesInput = {
  connect?: InputMaybe<StateWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutCitiesInput>;
  create?: InputMaybe<StateCreateWithoutCitiesInput>;
};

export type StateCreateOrConnectWithoutCitiesInput = {
  create: StateCreateWithoutCitiesInput;
  where: StateWhereUniqueInput;
};

export type StateCreateWithoutCitiesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StateGroupBy = {
  __typename?: 'StateGroupBy';
  _avg?: Maybe<StateAvgAggregate>;
  _count?: Maybe<StateCountAggregate>;
  _max?: Maybe<StateMaxAggregate>;
  _min?: Maybe<StateMinAggregate>;
  _sum?: Maybe<StateSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type StateMaxAggregate = {
  __typename?: 'StateMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StateMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type StateMinAggregate = {
  __typename?: 'StateMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StateMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type StateOrderByWithAggregationInput = {
  _avg?: InputMaybe<StateAvgOrderByAggregateInput>;
  _count?: InputMaybe<StateCountOrderByAggregateInput>;
  _max?: InputMaybe<StateMaxOrderByAggregateInput>;
  _min?: InputMaybe<StateMinOrderByAggregateInput>;
  _sum?: InputMaybe<StateSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type StateOrderByWithRelationInput = {
  cities?: InputMaybe<CityOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type StateRelationFilter = {
  is?: InputMaybe<StateWhereInput>;
  isNot?: InputMaybe<StateWhereInput>;
};

export enum StateScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type StateScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<StateScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<StateScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<StateScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type StateSumAggregate = {
  __typename?: 'StateSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type StateSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type StateUpdateInput = {
  cities?: InputMaybe<CityUpdateManyWithoutStateNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StateUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StateUpdateOneWithoutCitiesNestedInput = {
  connect?: InputMaybe<StateWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutCitiesInput>;
  create?: InputMaybe<StateCreateWithoutCitiesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<StateUpdateWithoutCitiesInput>;
  upsert?: InputMaybe<StateUpsertWithoutCitiesInput>;
};

export type StateUpdateWithoutCitiesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StateUpsertWithoutCitiesInput = {
  create: StateCreateWithoutCitiesInput;
  update: StateUpdateWithoutCitiesInput;
};

export type StateWhereInput = {
  AND?: InputMaybe<Array<StateWhereInput>>;
  NOT?: InputMaybe<Array<StateWhereInput>>;
  OR?: InputMaybe<Array<StateWhereInput>>;
  cities?: InputMaybe<CityListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type StateWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  permissions: Array<Permissions>;
  role: Roles;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
  permissions: Scalars['Int'];
  role: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  permissions?: InputMaybe<UserCreatepermissionsInput>;
  role?: InputMaybe<Roles>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  permissions?: InputMaybe<UserCreatepermissionsInput>;
  role?: InputMaybe<Roles>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreatepermissionsInput = {
  set: Array<Permissions>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  permissions?: Maybe<Array<Permissions>>;
  role: Roles;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Roles>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Roles>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  Permissions = 'permissions',
  Role = 'role',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  permissions?: InputMaybe<EnumPermissionsNullableListFilter>;
  role?: InputMaybe<EnumRolesWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<UserUpdatepermissionsInput>;
  role?: InputMaybe<EnumRolesFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<UserUpdatepermissionsInput>;
  role?: InputMaybe<EnumRolesFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdatepermissionsInput = {
  push?: InputMaybe<Array<Permissions>>;
  set?: InputMaybe<Array<Permissions>>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<EnumPermissionsNullableListFilter>;
  role?: InputMaybe<EnumRolesFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

export type RegularUserFragment = { __typename?: 'User', id: number, username: string };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
  remember: Scalars['Boolean'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', id: number, email?: string | null, username: string } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string } | null };

export type MovementsQueryVariables = Exact<{
  where?: InputMaybe<MovementWhereInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type MovementsQuery = { __typename?: 'Query', movements: Array<{ __typename?: 'Movement', id: any, label: string, postingDate: any, unitCost: any, serviceValue: any, centerOfCost: { __typename?: 'Company', name: string }, destinationCity?: { __typename?: 'City', name?: string | null } | null, file: { __typename?: 'File', name: string }, originCity?: { __typename?: 'City', name?: string | null } | null, postalCard: { __typename?: 'PostalCard', number: string, owner: string } }>, aggregateMovement: { __typename?: 'AggregateMovement', _count?: { __typename?: 'MovementCountAggregate', id: number } | null } };

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const LoginDocument = gql`
    mutation Login($password: String!, $usernameOrEmail: String!, $remember: Boolean!) {
  login(
    password: $password
    usernameOrEmail: $usernameOrEmail
    remember: $remember
  ) {
    id
    email
    username
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      remember: // value for 'remember'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MovementsDocument = gql`
    query Movements($where: MovementWhereInput, $take: Int, $skip: Int) {
  movements(where: $where, take: $take, skip: $skip) {
    id
    label
    postingDate
    centerOfCost {
      name
    }
    destinationCity {
      name
    }
    file {
      name
    }
    originCity {
      name
    }
    postalCard {
      number
      owner
    }
    unitCost
    serviceValue
  }
  aggregateMovement {
    _count {
      id
    }
  }
}
    `;

/**
 * __useMovementsQuery__
 *
 * To run a query within a React component, call `useMovementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovementsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useMovementsQuery(baseOptions?: Apollo.QueryHookOptions<MovementsQuery, MovementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovementsQuery, MovementsQueryVariables>(MovementsDocument, options);
      }
export function useMovementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovementsQuery, MovementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovementsQuery, MovementsQueryVariables>(MovementsDocument, options);
        }
export type MovementsQueryHookResult = ReturnType<typeof useMovementsQuery>;
export type MovementsLazyQueryHookResult = ReturnType<typeof useMovementsLazyQuery>;
export type MovementsQueryResult = Apollo.QueryResult<MovementsQuery, MovementsQueryVariables>;