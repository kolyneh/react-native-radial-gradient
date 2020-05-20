declare module 'react-native-radial-gradient' {
    import * as React from 'react';
    import * as ReactNative from 'react-native';

    export interface RadialGradientProps extends ReactNative.ViewProps {
        center?: Array<number>;
        colors?: Array<string>;
        stops?: Array<number>;
        radius?: number,
    }

    export class RadialGradient extends React.Component<RadialGradientProps> {
    }

    export default RadialGradient;
}
