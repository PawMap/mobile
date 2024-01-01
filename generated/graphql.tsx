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
  DateTime: any;
  JSON: any;
  JSONObject: any;
  Upload: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateBox = {
  __typename?: 'AggregateBox';
  _avg?: Maybe<BoxAvgAggregate>;
  _count?: Maybe<BoxCountAggregate>;
  _max?: Maybe<BoxMaxAggregate>;
  _min?: Maybe<BoxMinAggregate>;
  _sum?: Maybe<BoxSumAggregate>;
};

export type AggregateFood = {
  __typename?: 'AggregateFood';
  _avg?: Maybe<FoodAvgAggregate>;
  _count?: Maybe<FoodCountAggregate>;
  _max?: Maybe<FoodMaxAggregate>;
  _min?: Maybe<FoodMinAggregate>;
  _sum?: Maybe<FoodSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export enum Animal {
  CAT = 'CAT',
  DOG = 'DOG'
}

export type Box = {
  __typename?: 'Box';
  Food: Array<Food>;
  _count?: Maybe<BoxCount>;
  animal: Animal;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  createdById: Scalars['Int'];
  id: Scalars['Int'];
  location: Scalars['JSON'];
  updatedAt: Scalars['DateTime'];
};


export type BoxFoodArgs = {
  cursor?: InputMaybe<FoodWhereUniqueInput>;
  distinct?: InputMaybe<Array<FoodScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FoodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FoodWhereInput>;
};

export type BoxAvgAggregate = {
  __typename?: 'BoxAvgAggregate';
  createdById?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type BoxAvgOrderByAggregateInput = {
  createdById?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type BoxCount = {
  __typename?: 'BoxCount';
  Food: Scalars['Int'];
};

export type BoxCountAggregate = {
  __typename?: 'BoxCountAggregate';
  _all: Scalars['Int'];
  animal: Scalars['Int'];
  createdAt: Scalars['Int'];
  createdById: Scalars['Int'];
  id: Scalars['Int'];
  location: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type BoxCountOrderByAggregateInput = {
  animal?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BoxCreateInput = {
  Food?: InputMaybe<FoodCreateNestedManyWithoutBoxInput>;
  animal: Animal;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdBy: UserCreateNestedOneWithoutMyBoxesInput;
  location: Scalars['JSON'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BoxCreateManyCreatedByInput = {
  animal: Animal;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  location: Scalars['JSON'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BoxCreateManyCreatedByInputEnvelope = {
  data: Array<BoxCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BoxCreateManyInput = {
  animal: Animal;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdById: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  location: Scalars['JSON'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BoxCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<BoxWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BoxCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<BoxCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<BoxCreateManyCreatedByInputEnvelope>;
};

export type BoxCreateNestedOneWithoutFoodInput = {
  connect?: InputMaybe<BoxWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BoxCreateOrConnectWithoutFoodInput>;
  create?: InputMaybe<BoxCreateWithoutFoodInput>;
};

export type BoxCreateOrConnectWithoutCreatedByInput = {
  create: BoxCreateWithoutCreatedByInput;
  where: BoxWhereUniqueInput;
};

export type BoxCreateOrConnectWithoutFoodInput = {
  create: BoxCreateWithoutFoodInput;
  where: BoxWhereUniqueInput;
};

export type BoxCreateWithoutCreatedByInput = {
  Food?: InputMaybe<FoodCreateNestedManyWithoutBoxInput>;
  animal: Animal;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  location: Scalars['JSON'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BoxCreateWithoutFoodInput = {
  animal: Animal;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdBy: UserCreateNestedOneWithoutMyBoxesInput;
  location: Scalars['JSON'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BoxGroupBy = {
  __typename?: 'BoxGroupBy';
  _avg?: Maybe<BoxAvgAggregate>;
  _count?: Maybe<BoxCountAggregate>;
  _max?: Maybe<BoxMaxAggregate>;
  _min?: Maybe<BoxMinAggregate>;
  _sum?: Maybe<BoxSumAggregate>;
  animal: Animal;
  createdAt: Scalars['DateTime'];
  createdById: Scalars['Int'];
  id: Scalars['Int'];
  location: Scalars['JSON'];
  updatedAt: Scalars['DateTime'];
};

export type BoxListRelationFilter = {
  every?: InputMaybe<BoxWhereInput>;
  none?: InputMaybe<BoxWhereInput>;
  some?: InputMaybe<BoxWhereInput>;
};

export type BoxMaxAggregate = {
  __typename?: 'BoxMaxAggregate';
  animal?: Maybe<Animal>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdById?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BoxMaxOrderByAggregateInput = {
  animal?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BoxMinAggregate = {
  __typename?: 'BoxMinAggregate';
  animal?: Maybe<Animal>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdById?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BoxMinOrderByAggregateInput = {
  animal?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BoxOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BoxOrderByWithAggregationInput = {
  _avg?: InputMaybe<BoxAvgOrderByAggregateInput>;
  _count?: InputMaybe<BoxCountOrderByAggregateInput>;
  _max?: InputMaybe<BoxMaxOrderByAggregateInput>;
  _min?: InputMaybe<BoxMinOrderByAggregateInput>;
  _sum?: InputMaybe<BoxSumOrderByAggregateInput>;
  animal?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BoxOrderByWithRelationInput = {
  Food?: InputMaybe<FoodOrderByRelationAggregateInput>;
  animal?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BoxRelationFilter = {
  is?: InputMaybe<BoxWhereInput>;
  isNot?: InputMaybe<BoxWhereInput>;
};

export enum BoxScalarFieldEnum {
  animal = 'animal',
  createdAt = 'createdAt',
  createdById = 'createdById',
  id = 'id',
  location = 'location',
  updatedAt = 'updatedAt'
}

export type BoxScalarWhereInput = {
  AND?: InputMaybe<Array<BoxScalarWhereInput>>;
  NOT?: InputMaybe<Array<BoxScalarWhereInput>>;
  OR?: InputMaybe<Array<BoxScalarWhereInput>>;
  animal?: InputMaybe<EnumAnimalFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<JsonFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BoxScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BoxScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BoxScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BoxScalarWhereWithAggregatesInput>>;
  animal?: InputMaybe<EnumAnimalWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  createdById?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  location?: InputMaybe<JsonWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type BoxSumAggregate = {
  __typename?: 'BoxSumAggregate';
  createdById?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type BoxSumOrderByAggregateInput = {
  createdById?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type BoxUpdateInput = {
  Food?: InputMaybe<FoodUpdateManyWithoutBoxNestedInput>;
  animal?: InputMaybe<EnumAnimalFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutMyBoxesNestedInput>;
  location?: InputMaybe<Scalars['JSON']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BoxUpdateManyMutationInput = {
  animal?: InputMaybe<EnumAnimalFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  location?: InputMaybe<Scalars['JSON']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BoxUpdateManyWithWhereWithoutCreatedByInput = {
  data: BoxUpdateManyMutationInput;
  where: BoxScalarWhereInput;
};

export type BoxUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<BoxWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BoxCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<BoxCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<BoxCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<BoxWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BoxScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BoxWhereUniqueInput>>;
  set?: InputMaybe<Array<BoxWhereUniqueInput>>;
  update?: InputMaybe<Array<BoxUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<BoxUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<BoxUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type BoxUpdateOneRequiredWithoutFoodNestedInput = {
  connect?: InputMaybe<BoxWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BoxCreateOrConnectWithoutFoodInput>;
  create?: InputMaybe<BoxCreateWithoutFoodInput>;
  update?: InputMaybe<BoxUpdateWithoutFoodInput>;
  upsert?: InputMaybe<BoxUpsertWithoutFoodInput>;
};

export type BoxUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: BoxUpdateWithoutCreatedByInput;
  where: BoxWhereUniqueInput;
};

export type BoxUpdateWithoutCreatedByInput = {
  Food?: InputMaybe<FoodUpdateManyWithoutBoxNestedInput>;
  animal?: InputMaybe<EnumAnimalFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  location?: InputMaybe<Scalars['JSON']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BoxUpdateWithoutFoodInput = {
  animal?: InputMaybe<EnumAnimalFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdBy?: InputMaybe<UserUpdateOneRequiredWithoutMyBoxesNestedInput>;
  location?: InputMaybe<Scalars['JSON']>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BoxUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: BoxCreateWithoutCreatedByInput;
  update: BoxUpdateWithoutCreatedByInput;
  where: BoxWhereUniqueInput;
};

export type BoxUpsertWithoutFoodInput = {
  create: BoxCreateWithoutFoodInput;
  update: BoxUpdateWithoutFoodInput;
};

export type BoxWhereInput = {
  AND?: InputMaybe<Array<BoxWhereInput>>;
  Food?: InputMaybe<FoodListRelationFilter>;
  NOT?: InputMaybe<Array<BoxWhereInput>>;
  OR?: InputMaybe<Array<BoxWhereInput>>;
  animal?: InputMaybe<EnumAnimalFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserRelationFilter>;
  createdById?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<JsonFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BoxWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
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

export type EnumAnimalFieldUpdateOperationsInput = {
  set?: InputMaybe<Animal>;
};

export type EnumAnimalFilter = {
  equals?: InputMaybe<Animal>;
  in?: InputMaybe<Array<Animal>>;
  not?: InputMaybe<NestedEnumAnimalFilter>;
  notIn?: InputMaybe<Array<Animal>>;
};

export type EnumAnimalWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumAnimalFilter>;
  _min?: InputMaybe<NestedEnumAnimalFilter>;
  equals?: InputMaybe<Animal>;
  in?: InputMaybe<Array<Animal>>;
  not?: InputMaybe<NestedEnumAnimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Animal>>;
};

export type EnumFoodTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<FoodType>;
};

export type EnumFoodTypeFilter = {
  equals?: InputMaybe<FoodType>;
  in?: InputMaybe<Array<FoodType>>;
  not?: InputMaybe<NestedEnumFoodTypeFilter>;
  notIn?: InputMaybe<Array<FoodType>>;
};

export type EnumFoodTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumFoodTypeFilter>;
  _min?: InputMaybe<NestedEnumFoodTypeFilter>;
  equals?: InputMaybe<FoodType>;
  in?: InputMaybe<Array<FoodType>>;
  not?: InputMaybe<NestedEnumFoodTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<FoodType>>;
};

export type EnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumRoleNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumRoleNullableFilter>;
  _min?: InputMaybe<NestedEnumRoleNullableFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type Food = {
  __typename?: 'Food';
  box: Box;
  boxId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  expiredAt: Scalars['DateTime'];
  foodType: FoodType;
  id: Scalars['Int'];
  location: Scalars['JSON'];
  photo?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type FoodAvgAggregate = {
  __typename?: 'FoodAvgAggregate';
  boxId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type FoodAvgOrderByAggregateInput = {
  boxId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type FoodCountAggregate = {
  __typename?: 'FoodCountAggregate';
  _all: Scalars['Int'];
  boxId: Scalars['Int'];
  createdAt: Scalars['Int'];
  expiredAt: Scalars['Int'];
  foodType: Scalars['Int'];
  id: Scalars['Int'];
  location: Scalars['Int'];
  photo: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type FoodCountOrderByAggregateInput = {
  boxId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  foodType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FoodCreateInput = {
  box: BoxCreateNestedOneWithoutFoodInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  foodType: FoodType;
  location: Scalars['JSON'];
  photo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FoodCreateManyBoxInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  foodType: FoodType;
  id?: InputMaybe<Scalars['Int']>;
  location: Scalars['JSON'];
  photo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FoodCreateManyBoxInputEnvelope = {
  data: Array<FoodCreateManyBoxInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FoodCreateManyInput = {
  boxId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  foodType: FoodType;
  id?: InputMaybe<Scalars['Int']>;
  location: Scalars['JSON'];
  photo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FoodCreateNestedManyWithoutBoxInput = {
  connect?: InputMaybe<Array<FoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCreateOrConnectWithoutBoxInput>>;
  create?: InputMaybe<Array<FoodCreateWithoutBoxInput>>;
  createMany?: InputMaybe<FoodCreateManyBoxInputEnvelope>;
};

export type FoodCreateOrConnectWithoutBoxInput = {
  create: FoodCreateWithoutBoxInput;
  where: FoodWhereUniqueInput;
};

export type FoodCreateWithoutBoxInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  foodType: FoodType;
  location: Scalars['JSON'];
  photo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FoodGroupBy = {
  __typename?: 'FoodGroupBy';
  _avg?: Maybe<FoodAvgAggregate>;
  _count?: Maybe<FoodCountAggregate>;
  _max?: Maybe<FoodMaxAggregate>;
  _min?: Maybe<FoodMinAggregate>;
  _sum?: Maybe<FoodSumAggregate>;
  boxId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  expiredAt: Scalars['DateTime'];
  foodType: FoodType;
  id: Scalars['Int'];
  location: Scalars['JSON'];
  photo?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type FoodListRelationFilter = {
  every?: InputMaybe<FoodWhereInput>;
  none?: InputMaybe<FoodWhereInput>;
  some?: InputMaybe<FoodWhereInput>;
};

export type FoodMaxAggregate = {
  __typename?: 'FoodMaxAggregate';
  boxId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiredAt?: Maybe<Scalars['DateTime']>;
  foodType?: Maybe<FoodType>;
  id?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FoodMaxOrderByAggregateInput = {
  boxId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  foodType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FoodMinAggregate = {
  __typename?: 'FoodMinAggregate';
  boxId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiredAt?: Maybe<Scalars['DateTime']>;
  foodType?: Maybe<FoodType>;
  id?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FoodMinOrderByAggregateInput = {
  boxId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  foodType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FoodOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FoodOrderByWithAggregationInput = {
  _avg?: InputMaybe<FoodAvgOrderByAggregateInput>;
  _count?: InputMaybe<FoodCountOrderByAggregateInput>;
  _max?: InputMaybe<FoodMaxOrderByAggregateInput>;
  _min?: InputMaybe<FoodMinOrderByAggregateInput>;
  _sum?: InputMaybe<FoodSumOrderByAggregateInput>;
  boxId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  foodType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FoodOrderByWithRelationInput = {
  box?: InputMaybe<BoxOrderByWithRelationInput>;
  boxId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  foodType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum FoodScalarFieldEnum {
  boxId = 'boxId',
  createdAt = 'createdAt',
  expiredAt = 'expiredAt',
  foodType = 'foodType',
  id = 'id',
  location = 'location',
  photo = 'photo',
  updatedAt = 'updatedAt'
}

export type FoodScalarWhereInput = {
  AND?: InputMaybe<Array<FoodScalarWhereInput>>;
  NOT?: InputMaybe<Array<FoodScalarWhereInput>>;
  OR?: InputMaybe<Array<FoodScalarWhereInput>>;
  boxId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiredAt?: InputMaybe<DateTimeFilter>;
  foodType?: InputMaybe<EnumFoodTypeFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<JsonFilter>;
  photo?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FoodScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FoodScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FoodScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FoodScalarWhereWithAggregatesInput>>;
  boxId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiredAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  foodType?: InputMaybe<EnumFoodTypeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  location?: InputMaybe<JsonWithAggregatesFilter>;
  photo?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type FoodSumAggregate = {
  __typename?: 'FoodSumAggregate';
  boxId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type FoodSumOrderByAggregateInput = {
  boxId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export enum FoodType {
  DRY = 'DRY',
  WET = 'WET'
}

export type FoodUpdateInput = {
  box?: InputMaybe<BoxUpdateOneRequiredWithoutFoodNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  foodType?: InputMaybe<EnumFoodTypeFieldUpdateOperationsInput>;
  location?: InputMaybe<Scalars['JSON']>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FoodUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  foodType?: InputMaybe<EnumFoodTypeFieldUpdateOperationsInput>;
  location?: InputMaybe<Scalars['JSON']>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FoodUpdateManyWithWhereWithoutBoxInput = {
  data: FoodUpdateManyMutationInput;
  where: FoodScalarWhereInput;
};

export type FoodUpdateManyWithoutBoxNestedInput = {
  connect?: InputMaybe<Array<FoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCreateOrConnectWithoutBoxInput>>;
  create?: InputMaybe<Array<FoodCreateWithoutBoxInput>>;
  createMany?: InputMaybe<FoodCreateManyBoxInputEnvelope>;
  delete?: InputMaybe<Array<FoodWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodUpdateWithWhereUniqueWithoutBoxInput>>;
  updateMany?: InputMaybe<Array<FoodUpdateManyWithWhereWithoutBoxInput>>;
  upsert?: InputMaybe<Array<FoodUpsertWithWhereUniqueWithoutBoxInput>>;
};

export type FoodUpdateWithWhereUniqueWithoutBoxInput = {
  data: FoodUpdateWithoutBoxInput;
  where: FoodWhereUniqueInput;
};

export type FoodUpdateWithoutBoxInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  foodType?: InputMaybe<EnumFoodTypeFieldUpdateOperationsInput>;
  location?: InputMaybe<Scalars['JSON']>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FoodUpsertWithWhereUniqueWithoutBoxInput = {
  create: FoodCreateWithoutBoxInput;
  update: FoodUpdateWithoutBoxInput;
  where: FoodWhereUniqueInput;
};

export type FoodWhereInput = {
  AND?: InputMaybe<Array<FoodWhereInput>>;
  NOT?: InputMaybe<Array<FoodWhereInput>>;
  OR?: InputMaybe<Array<FoodWhereInput>>;
  box?: InputMaybe<BoxRelationFilter>;
  boxId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiredAt?: InputMaybe<DateTimeFilter>;
  foodType?: InputMaybe<EnumFoodTypeFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<JsonFilter>;
  photo?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FoodWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
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

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type LoginInput = {
  phone: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyBox: AffectedRowsOutput;
  createManyFood: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneBox: Box;
  createOneFood: Food;
  createOneUser: User;
  deleteManyBox: AffectedRowsOutput;
  deleteManyFood: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneBox?: Maybe<Box>;
  deleteOneFood?: Maybe<Food>;
  deleteOneUser?: Maybe<User>;
  login: UserLoginPayload;
  resendCode: UserLoginPayload;
  updateManyBox: AffectedRowsOutput;
  updateManyFood: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneBox?: Maybe<Box>;
  updateOneFood?: Maybe<Food>;
  updateOneUser?: Maybe<User>;
  uploadFile: Scalars['JSONObject'];
  upsertOneBox: Box;
  upsertOneFood: Food;
  upsertOneUser: User;
  verify: UserAuthPayload;
};


export type MutationCreateManyBoxArgs = {
  data: Array<BoxCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFoodArgs = {
  data: Array<FoodCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneBoxArgs = {
  data: BoxCreateInput;
};


export type MutationCreateOneFoodArgs = {
  data: FoodCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyBoxArgs = {
  where?: InputMaybe<BoxWhereInput>;
};


export type MutationDeleteManyFoodArgs = {
  where?: InputMaybe<FoodWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneBoxArgs = {
  where: BoxWhereUniqueInput;
};


export type MutationDeleteOneFoodArgs = {
  where: FoodWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationResendCodeArgs = {
  id: Scalars['Float'];
};


export type MutationUpdateManyBoxArgs = {
  data: BoxUpdateManyMutationInput;
  where?: InputMaybe<BoxWhereInput>;
};


export type MutationUpdateManyFoodArgs = {
  data: FoodUpdateManyMutationInput;
  where?: InputMaybe<FoodWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneBoxArgs = {
  data: BoxUpdateInput;
  where: BoxWhereUniqueInput;
};


export type MutationUpdateOneFoodArgs = {
  data: FoodUpdateInput;
  where: FoodWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type MutationUpsertOneBoxArgs = {
  create: BoxCreateInput;
  update: BoxUpdateInput;
  where: BoxWhereUniqueInput;
};


export type MutationUpsertOneFoodArgs = {
  create: FoodCreateInput;
  update: FoodUpdateInput;
  where: FoodWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationVerifyArgs = {
  code: Scalars['String'];
  id: Scalars['Float'];
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

export type NestedEnumAnimalFilter = {
  equals?: InputMaybe<Animal>;
  in?: InputMaybe<Array<Animal>>;
  not?: InputMaybe<NestedEnumAnimalFilter>;
  notIn?: InputMaybe<Array<Animal>>;
};

export type NestedEnumAnimalWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumAnimalFilter>;
  _min?: InputMaybe<NestedEnumAnimalFilter>;
  equals?: InputMaybe<Animal>;
  in?: InputMaybe<Array<Animal>>;
  not?: InputMaybe<NestedEnumAnimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Animal>>;
};

export type NestedEnumFoodTypeFilter = {
  equals?: InputMaybe<FoodType>;
  in?: InputMaybe<Array<FoodType>>;
  not?: InputMaybe<NestedEnumFoodTypeFilter>;
  notIn?: InputMaybe<Array<FoodType>>;
};

export type NestedEnumFoodTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumFoodTypeFilter>;
  _min?: InputMaybe<NestedEnumFoodTypeFilter>;
  equals?: InputMaybe<FoodType>;
  in?: InputMaybe<Array<FoodType>>;
  not?: InputMaybe<NestedEnumFoodTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<FoodType>>;
};

export type NestedEnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumRoleNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumRoleNullableFilter>;
  _min?: InputMaybe<NestedEnumRoleNullableFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
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

export type NestedJsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
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

export type NullableEnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateBox: AggregateBox;
  aggregateFood: AggregateFood;
  aggregateUser: AggregateUser;
  box?: Maybe<Box>;
  boxes: Array<Box>;
  findFirstBox?: Maybe<Box>;
  findFirstBoxOrThrow?: Maybe<Box>;
  findFirstFood?: Maybe<Food>;
  findFirstFoodOrThrow?: Maybe<Food>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  food?: Maybe<Food>;
  foods: Array<Food>;
  getBox?: Maybe<Box>;
  getFood?: Maybe<Food>;
  getUser?: Maybe<User>;
  groupByBox: Array<BoxGroupBy>;
  groupByFood: Array<FoodGroupBy>;
  groupByUser: Array<UserGroupBy>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateBoxArgs = {
  cursor?: InputMaybe<BoxWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BoxOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BoxWhereInput>;
};


export type QueryAggregateFoodArgs = {
  cursor?: InputMaybe<FoodWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FoodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FoodWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryBoxArgs = {
  where: BoxWhereUniqueInput;
};


export type QueryBoxesArgs = {
  cursor?: InputMaybe<BoxWhereUniqueInput>;
  distinct?: InputMaybe<Array<BoxScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BoxOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BoxWhereInput>;
};


export type QueryFindFirstBoxArgs = {
  cursor?: InputMaybe<BoxWhereUniqueInput>;
  distinct?: InputMaybe<Array<BoxScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BoxOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BoxWhereInput>;
};


export type QueryFindFirstBoxOrThrowArgs = {
  cursor?: InputMaybe<BoxWhereUniqueInput>;
  distinct?: InputMaybe<Array<BoxScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BoxOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BoxWhereInput>;
};


export type QueryFindFirstFoodArgs = {
  cursor?: InputMaybe<FoodWhereUniqueInput>;
  distinct?: InputMaybe<Array<FoodScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FoodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FoodWhereInput>;
};


export type QueryFindFirstFoodOrThrowArgs = {
  cursor?: InputMaybe<FoodWhereUniqueInput>;
  distinct?: InputMaybe<Array<FoodScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FoodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FoodWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFoodArgs = {
  where: FoodWhereUniqueInput;
};


export type QueryFoodsArgs = {
  cursor?: InputMaybe<FoodWhereUniqueInput>;
  distinct?: InputMaybe<Array<FoodScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FoodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FoodWhereInput>;
};


export type QueryGetBoxArgs = {
  where: BoxWhereUniqueInput;
};


export type QueryGetFoodArgs = {
  where: FoodWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByBoxArgs = {
  by: Array<BoxScalarFieldEnum>;
  having?: InputMaybe<BoxScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BoxOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BoxWhereInput>;
};


export type QueryGroupByFoodArgs = {
  by: Array<FoodScalarFieldEnum>;
  having?: InputMaybe<FoodScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FoodOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FoodWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
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
  default = 'default',
  insensitive = 'insensitive'
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc'
}

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
  _count?: Maybe<UserCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  type?: Maybe<Role>;
  updatedAt: Scalars['DateTime'];
};

export type UserAuthPayload = {
  __typename?: 'UserAuthPayload';
  id: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  token: Scalars['String'];
  type: Scalars['String'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  myBoxes: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  phone: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  myBoxes?: InputMaybe<BoxCreateNestedManyWithoutCreatedByInput>;
  name?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  type?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  type?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutMyBoxesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMyBoxesInput>;
  create?: InputMaybe<UserCreateWithoutMyBoxesInput>;
};

export type UserCreateOrConnectWithoutMyBoxesInput = {
  create: UserCreateWithoutMyBoxesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutMyBoxesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  type?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  type?: Maybe<Role>;
  updatedAt: Scalars['DateTime'];
};

export type UserLoginPayload = {
  __typename?: 'UserLoginPayload';
  id: Scalars['Float'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  type?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  type?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  myBoxes?: InputMaybe<BoxOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  createdAt = 'createdAt',
  id = 'id',
  name = 'name',
  phone = 'phone',
  type = 'type',
  updatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<EnumRoleNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
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
  myBoxes?: InputMaybe<BoxUpdateManyWithoutCreatedByNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutMyBoxesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMyBoxesInput>;
  create?: InputMaybe<UserCreateWithoutMyBoxesInput>;
  update?: InputMaybe<UserUpdateWithoutMyBoxesInput>;
  upsert?: InputMaybe<UserUpsertWithoutMyBoxesInput>;
};

export type UserUpdateWithoutMyBoxesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutMyBoxesInput = {
  create: UserCreateWithoutMyBoxesInput;
  update: UserUpdateWithoutMyBoxesInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  myBoxes?: InputMaybe<BoxListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumRoleNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type BoxesQueryVariables = Exact<{ [key: string]: never; }>;


export type BoxesQuery = { __typename?: 'Query', boxes: Array<{ __typename?: 'Box', id: number, location: any, updatedAt: any, createdById: number, animal: Animal, createdAt: any, createdBy: { __typename?: 'User', id: number, name?: string | null } }> };

export type CreateOneBoxMutationVariables = Exact<{
  data: BoxCreateInput;
}>;


export type CreateOneBoxMutation = { __typename?: 'Mutation', createOneBox: { __typename?: 'Box', id: number } };

export type CreateOneFoodMutationVariables = Exact<{
  data: FoodCreateInput;
}>;


export type CreateOneFoodMutation = { __typename?: 'Mutation', createOneFood: { __typename?: 'Food', id: number, boxId: number } };

export type FoodsQueryVariables = Exact<{
  where?: InputMaybe<FoodWhereInput>;
  orderBy?: InputMaybe<Array<FoodOrderByWithRelationInput> | FoodOrderByWithRelationInput>;
}>;


export type FoodsQuery = { __typename?: 'Query', foods: Array<{ __typename?: 'Food', boxId: number, createdAt: any, expiredAt: any, foodType: FoodType, id: number, location: any, photo?: string | null, updatedAt: any, box: { __typename?: 'Box', animal: Animal, createdAt: any, location: any, id: number, updatedAt: any, createdBy: { __typename?: 'User', name?: string | null, id: number, createdAt: any, type?: Role | null, updatedAt: any } } }> };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserLoginPayload', id: number } };

export type ResendCodeMutationVariables = Exact<{
  resendCodeId: Scalars['Float'];
}>;


export type ResendCodeMutation = { __typename?: 'Mutation', resendCode: { __typename?: 'UserLoginPayload', id: number } };

export type VerifyMutationVariables = Exact<{
  verifyId: Scalars['Float'];
  code: Scalars['String'];
}>;


export type VerifyMutation = { __typename?: 'Mutation', verify: { __typename?: 'UserAuthPayload', token: string, id: number, phone: string, type: string, name?: string | null } };


export const BoxesDocument = gql`
    query Boxes {
  boxes {
    id
    location
    updatedAt
    createdById
    createdBy {
      id
      name
    }
    animal
    createdAt
  }
}
    `;

/**
 * __useBoxesQuery__
 *
 * To run a query within a React component, call `useBoxesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoxesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoxesQuery({
 *   variables: {
 *   },
 * });
 */
export function useBoxesQuery(baseOptions?: Apollo.QueryHookOptions<BoxesQuery, BoxesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BoxesQuery, BoxesQueryVariables>(BoxesDocument, options);
      }
export function useBoxesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BoxesQuery, BoxesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BoxesQuery, BoxesQueryVariables>(BoxesDocument, options);
        }
export type BoxesQueryHookResult = ReturnType<typeof useBoxesQuery>;
export type BoxesLazyQueryHookResult = ReturnType<typeof useBoxesLazyQuery>;
export type BoxesQueryResult = Apollo.QueryResult<BoxesQuery, BoxesQueryVariables>;
export const CreateOneBoxDocument = gql`
    mutation CreateOneBox($data: BoxCreateInput!) {
  createOneBox(data: $data) {
    id
  }
}
    `;
export type CreateOneBoxMutationFn = Apollo.MutationFunction<CreateOneBoxMutation, CreateOneBoxMutationVariables>;

/**
 * __useCreateOneBoxMutation__
 *
 * To run a mutation, you first call `useCreateOneBoxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneBoxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneBoxMutation, { data, loading, error }] = useCreateOneBoxMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneBoxMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneBoxMutation, CreateOneBoxMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneBoxMutation, CreateOneBoxMutationVariables>(CreateOneBoxDocument, options);
      }
export type CreateOneBoxMutationHookResult = ReturnType<typeof useCreateOneBoxMutation>;
export type CreateOneBoxMutationResult = Apollo.MutationResult<CreateOneBoxMutation>;
export type CreateOneBoxMutationOptions = Apollo.BaseMutationOptions<CreateOneBoxMutation, CreateOneBoxMutationVariables>;
export const CreateOneFoodDocument = gql`
    mutation CreateOneFood($data: FoodCreateInput!) {
  createOneFood(data: $data) {
    id
    boxId
  }
}
    `;
export type CreateOneFoodMutationFn = Apollo.MutationFunction<CreateOneFoodMutation, CreateOneFoodMutationVariables>;

/**
 * __useCreateOneFoodMutation__
 *
 * To run a mutation, you first call `useCreateOneFoodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneFoodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneFoodMutation, { data, loading, error }] = useCreateOneFoodMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneFoodMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneFoodMutation, CreateOneFoodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneFoodMutation, CreateOneFoodMutationVariables>(CreateOneFoodDocument, options);
      }
export type CreateOneFoodMutationHookResult = ReturnType<typeof useCreateOneFoodMutation>;
export type CreateOneFoodMutationResult = Apollo.MutationResult<CreateOneFoodMutation>;
export type CreateOneFoodMutationOptions = Apollo.BaseMutationOptions<CreateOneFoodMutation, CreateOneFoodMutationVariables>;
export const FoodsDocument = gql`
    query Foods($where: FoodWhereInput, $orderBy: [FoodOrderByWithRelationInput!]) {
  foods(where: $where, orderBy: $orderBy) {
    boxId
    createdAt
    expiredAt
    foodType
    id
    location
    photo
    updatedAt
    box {
      animal
      createdAt
      createdBy {
        name
        id
        createdAt
        type
        updatedAt
      }
      location
      id
      updatedAt
    }
  }
}
    `;

/**
 * __useFoodsQuery__
 *
 * To run a query within a React component, call `useFoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoodsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFoodsQuery(baseOptions?: Apollo.QueryHookOptions<FoodsQuery, FoodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FoodsQuery, FoodsQueryVariables>(FoodsDocument, options);
      }
export function useFoodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FoodsQuery, FoodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FoodsQuery, FoodsQueryVariables>(FoodsDocument, options);
        }
export type FoodsQueryHookResult = ReturnType<typeof useFoodsQuery>;
export type FoodsLazyQueryHookResult = ReturnType<typeof useFoodsLazyQuery>;
export type FoodsQueryResult = Apollo.QueryResult<FoodsQuery, FoodsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    id
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
 *      data: // value for 'data'
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
export const ResendCodeDocument = gql`
    mutation ResendCode($resendCodeId: Float!) {
  resendCode(id: $resendCodeId) {
    id
  }
}
    `;
export type ResendCodeMutationFn = Apollo.MutationFunction<ResendCodeMutation, ResendCodeMutationVariables>;

/**
 * __useResendCodeMutation__
 *
 * To run a mutation, you first call `useResendCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendCodeMutation, { data, loading, error }] = useResendCodeMutation({
 *   variables: {
 *      resendCodeId: // value for 'resendCodeId'
 *   },
 * });
 */
export function useResendCodeMutation(baseOptions?: Apollo.MutationHookOptions<ResendCodeMutation, ResendCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResendCodeMutation, ResendCodeMutationVariables>(ResendCodeDocument, options);
      }
export type ResendCodeMutationHookResult = ReturnType<typeof useResendCodeMutation>;
export type ResendCodeMutationResult = Apollo.MutationResult<ResendCodeMutation>;
export type ResendCodeMutationOptions = Apollo.BaseMutationOptions<ResendCodeMutation, ResendCodeMutationVariables>;
export const VerifyDocument = gql`
    mutation Verify($verifyId: Float!, $code: String!) {
  verify(id: $verifyId, code: $code) {
    token
    id
    phone
    type
    name
  }
}
    `;
export type VerifyMutationFn = Apollo.MutationFunction<VerifyMutation, VerifyMutationVariables>;

/**
 * __useVerifyMutation__
 *
 * To run a mutation, you first call `useVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyMutation, { data, loading, error }] = useVerifyMutation({
 *   variables: {
 *      verifyId: // value for 'verifyId'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useVerifyMutation(baseOptions?: Apollo.MutationHookOptions<VerifyMutation, VerifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyMutation, VerifyMutationVariables>(VerifyDocument, options);
      }
export type VerifyMutationHookResult = ReturnType<typeof useVerifyMutation>;
export type VerifyMutationResult = Apollo.MutationResult<VerifyMutation>;
export type VerifyMutationOptions = Apollo.BaseMutationOptions<VerifyMutation, VerifyMutationVariables>;