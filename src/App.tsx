import { LabelText } from "./label-text";
import { LabelText as LabelTextAsSpan } from "./label-text-as-span";
import "./styles.css";
export default function App() {
  return (
    <section>
      <div>
        <h1>LabelText as Dinamic DOM</h1>
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

        <LabelText as="span" variant="soft" isRequired>
          example labeltext soft isRequired as span
        </LabelText>
        <br />
      </div>

      <div>
        <h1>LabelText as Static Span</h1>
        <LabelTextAsSpan>example labeltext default</LabelTextAsSpan>
        <br />
        <LabelTextAsSpan size="small">example labeltext strong small</LabelTextAsSpan>
        <br />
        <LabelTextAsSpan variant="strong" size="medium">
          example labeltext strong medium
        </LabelTextAsSpan>
        <br />
        <LabelTextAsSpan variant="soft" size="small">
          example labeltext soft small
        </LabelTextAsSpan>
        <br />
        <LabelTextAsSpan variant="soft" isRequired>
          example labeltext soft isRequired
        </LabelTextAsSpan>
        <br />
      </div>
    </section>
  );
}
