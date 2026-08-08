export declare const spotifyPlayToolManifest: {
    name: string;
    description: string;
    parameters: {
        type: "object";
        properties: {
            uri: {
                type: "string";
                description: string;
            };
            uris: {
                type: "array";
                items: {
                    type: "string";
                };
                description: string;
            };
            reason: {
                type: "string";
                description: string;
            };
        };
        oneOf: {
            required: string[];
        }[];
        additionalProperties: false;
    };
};
//# sourceMappingURL=manifest.d.ts.map