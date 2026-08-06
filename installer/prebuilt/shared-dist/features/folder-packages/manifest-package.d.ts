export type MarinaraFolderKind = "marinara.agent-folder" | "marinara.function-folder" | "marinara.theme-folder" | "marinara.preset-folder";
export interface MarinaraItemManifest<T = unknown> {
    kind: string;
    version: 1;
    config: T;
}
export interface MarinaraFolderEntry<T = unknown> {
    path: string;
    manifest: MarinaraItemManifest<T>;
}
export interface MarinaraFolderPackage<T = unknown> {
    kind: MarinaraFolderKind;
    version: 1;
    exportedAt: string;
    folderName: string;
    agents?: MarinaraFolderEntry<T>[];
    functions?: MarinaraFolderEntry<T>[];
    themes?: MarinaraFolderEntry<T>[];
    presets?: MarinaraFolderEntry<T>[];
}
export declare function isJsonRecord(value: unknown): value is Record<string, unknown>;
export declare function sanitizeFolderSegment(value: string, fallback: string): string;
export declare function createFolderEntry<T>({ folderName, itemName, itemKind, config, fallbackName, }: {
    folderName: string;
    itemName: string;
    itemKind: string;
    config: T;
    fallbackName: string;
}): MarinaraFolderEntry<T>;
export declare function getFolderManifestConfig<T = unknown>(entry: unknown): T | null;
export declare function getFolderImportEntries(parsed: unknown, keys: string[]): unknown[];
//# sourceMappingURL=manifest-package.d.ts.map