interface Options {
  isPrefix: boolean;
  prefixName?: string;
}

export function envJsonSync (file?: string, options?: Options): boolean;
export function envJson (file?: string, options?: Options): Promise<boolean>;
