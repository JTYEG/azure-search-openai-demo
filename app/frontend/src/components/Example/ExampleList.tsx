import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Write me a proposal for Flood Predictor",
        value: "Write me a proposal for Flood Predictor?"
    },
    { text: "Find me some people with skills in Software Development", value: "Find me some people with skills in Software Development" },
    { text: "What are the 3Cs of the Buildings Brand?", value: "What are the 3Cs of the Buildings Brand?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
