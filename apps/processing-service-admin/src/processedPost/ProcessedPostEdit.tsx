import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProcessedPostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="OriginalPostID" source="originalPostId" />
        <TextInput
          label="ProcessedContent"
          multiline
          source="processedContent"
        />
        <DateTimeInput label="ProcessingDate" source="processingDate" />
      </SimpleForm>
    </Edit>
  );
};
