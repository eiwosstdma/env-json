interface Options {
  isPrefix: boolean;
  prefixName?: string;
}

export function envJson (file?: string, options?: Options): void;
