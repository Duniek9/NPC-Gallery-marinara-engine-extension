import type { LorebookFolder } from "../types/lorebook.js";
type FolderTreeNode = Pick<LorebookFolder, "id" | "lorebookId" | "parentFolderId">;
type ReparentResult = {
    ok: true;
} | {
    ok: false;
    reason: string;
};
/**
 * Validate whether `folderId` may be re-parented under `newParentId`. Used by
 * the server (reject invalid moves) and the client (filter the parent picker so
 * invalid targets never appear). Walks the parent chain UPWARD from the target
 * parent looking for the moving folder's own id; a `seen` set guards against any
 * pre-existing malformed cycle. There is intentionally no max-depth limit.
 */
export declare function canReparentFolder(folders: FolderTreeNode[], folderId: string, newParentId: string | null): ReparentResult;
/** Collapsing a folder hides its whole subtree from "select visible". */
export declare function collectHiddenFolderIds(folders: Pick<LorebookFolder, "id" | "parentFolderId">[], collapsedFolderIds: ReadonlySet<string>): Set<string>;
/**
 * All folder ids in the subtree rooted at `rootId` — the root itself plus every
 * descendant. Used to cascade-delete a folder together with its sub-folders, and
 * to count how many would be removed. Cycle-safe via `seen`.
 */
export declare function collectFolderSubtreeIds(folders: Pick<LorebookFolder, "id" | "parentFolderId">[], rootId: string): string[];
/**
 * A folder is *effectively* disabled if it — or any ancestor — is disabled, so a
 * disabled parent gates the entries living in its enabled children too. Walks
 * each folder's parent chain upward with a per-walk `seen` cycle guard.
 */
export declare function collectEffectivelyDisabledFolderIds(folders: Pick<LorebookFolder, "id" | "parentFolderId" | "enabled">[]): Set<string>;
type ForestNode = {
    id: string;
    parentFolderId: string | null;
    order: number;
};
/** Render shape: sorted roots plus sorted child lists. */
export type FolderForest<T extends ForestNode> = {
    roots: T[];
    childrenByParent: Map<string, T[]>;
};
/**
 * Assemble a flat folder list into a forest. A folder whose parent is missing
 * from the set falls back to root (so an orphaned/just-deleted-parent folder
 * stays editable), and folders trapped in a pure cycle are promoted to roots.
 */
export declare function buildFolderForest<T extends ForestNode>(folders: T[]): FolderForest<T>;
export {};
//# sourceMappingURL=lorebook-folder-tree.d.ts.map