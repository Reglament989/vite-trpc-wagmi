import en from "@/locales/en.json";

// Hacky way of doing static types in i18next credit: https://github.com/i18next/i18next/issues/1337#issuecomment-642293544
declare module "i18next" {
  import { StringMap, TOptions } from "i18next";
  import { WithTranslation as IWithTranslation } from "react-i18next";

  type Modify<T, R> = Omit<T, keyof R> & R;

  export type TranslationKeys = typeof en;

  type TFunctionResult =
    | string
    | object
    | Array<string | object>
    | undefined
    | null;

  interface TFunction {
    <
      TResult extends TFunctionResult = string,
      TInterpolationMap extends object = StringMap
    >(
      key: keyof TranslationKeys,
      options?: TOptions<TInterpolationMap> | string
    ): TResult;
    <
      TResult extends TFunctionResult = string,
      TInterpolationMap extends object = StringMap
    >(
      key: keyof TranslationKeys,
      defaultValue?: string,
      options?: TOptions<TInterpolationMap> | string
    ): TResult;
  }

  export type WithTranslation = Modify<
    IWithTranslation,
    {
      t: TFunction;
    }
  >;
}
