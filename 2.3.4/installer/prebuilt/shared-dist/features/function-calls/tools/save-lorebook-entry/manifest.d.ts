export declare const saveLorebookEntryToolManifest: {
    name: string;
    description: string;
    parameters: {
        type: "object";
        properties: {
            name: {
                type: "string";
                description: string;
            };
            content: {
                type: "string";
                description: string;
            };
            description: {
                type: "string";
                description: string;
            };
            keys: {
                type: "array";
                items: {
                    type: "string";
                };
                description: string;
            };
            tag: {
                type: "string";
                description: string;
            };
            mode: {
                type: "string";
                enum: string[];
                description: string;
            };
        };
        required: string[];
    };
};
//# sourceMappingURL=manifest.d.ts.map