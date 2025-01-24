import { LabelText } from "./label-text";
import "./styles.css";
export default function App() {
  return (
    <div>
      <LabelText>example labeltext default</LabelText>
      <br />
      <LabelText size="small">example labeltext strong small</LabelText>
      <br />
      <LabelText variant="strong" size="medium">
        example labeltext strong medium
      </LabelText>
      <br />
      <LabelText variant="soft" size="small">
        example labeltext soft small
      </LabelText>
      <br />
      <LabelText variant="soft" isRequired>
        example labeltext soft isRequired
      </LabelText>
      <br />
    </div>
  );
}
