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
            black: string;
            white: string;
            lemonchiffon: string;
            gray: string;
            skeleton: string;
            skyblue: string;
            lightgreen: string;
        };
        flexColumnCenter: ThemedCssFunction;
    }
}
