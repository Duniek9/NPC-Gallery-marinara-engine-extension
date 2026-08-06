export declare const updateAboutMeToolManifest: {
    name: string;
    description: string;
    parameters: {
        type: "object";
        properties: {
            scope: {
                type: "string";
                enum: string[];
                description: string;
            };
            content: {
                type: "string";
                description: string;
            };
        };
        required: string[];
    };
};
//# sourceMappingURL=manifest.d.ts.map