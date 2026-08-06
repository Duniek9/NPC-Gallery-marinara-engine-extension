export declare const triggerEventToolManifest: {
    name: string;
    description: string;
    parameters: {
        type: "object";
        properties: {
            eventType: {
                type: "string";
                description: string;
                enum: string[];
            };
            description: {
                type: "string";
                description: string;
            };
            involvedCharacters: {
                type: "array";
                items: {
                    type: "string";
                };
                description: string;
            };
        };
        required: string[];
    };
};
//# sourceMappingURL=manifest.d.ts.map