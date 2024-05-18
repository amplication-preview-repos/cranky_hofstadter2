import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProcessedPostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="OriginalPostID" source="originalPostId" />
        <TextInput
          label="ProcessedContent"
          multiline
          source="processedContent"
        />
        <DateTimeInput label="ProcessingDate" source="processingDate" />
      </SimpleForm>
    </Create>
  );
};
