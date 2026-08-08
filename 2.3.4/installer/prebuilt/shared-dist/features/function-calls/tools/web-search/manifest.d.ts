export declare const webSearchToolManifest: {
    name: string;
    description: string;
    parameters: {
        type: "object";
        properties: {
            query: {
                type: "string";
                description: string;
            };
            limit: {
                type: "integer";
                description: string;
                minimum: number;
                maximum: number;
            };
        };
        required: string[];
    };
};
//# sourceMappingURL=manifest.d.ts.map