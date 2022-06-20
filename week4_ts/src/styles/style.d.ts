import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        fontSizes: {
            form: string;
            searchTitle: string;
            input: string;
            placeName: string;
            roadAddressName: string;
            phone: string;
        };
        colors: {
            main: string;
            white: string;
            header: string;
            brown: string;
            skeleton: string;
            lightYellow: string;
            skyblue: string;
            lightgreen: string;
        };
    }
}
