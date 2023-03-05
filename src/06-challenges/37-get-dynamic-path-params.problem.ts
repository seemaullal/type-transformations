import { S } from "ts-toolbelt";
import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganizationPath = "/users/:id/organizations/:organizationId";

type ExtractPathParams<TPath extends string> = {
  [key in S.Split<TPath, "/">[number] as key extends `:${infer TPathPart}`
    ? TPathPart
    : never]: string;
};

type t = ExtractPathParams<UserPath>;

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganizationPath>,
      { id: string; organizationId: string }
    >
  >
];
