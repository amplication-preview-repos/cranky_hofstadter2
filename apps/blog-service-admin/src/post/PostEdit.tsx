import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AuthorTitle } from "../author/AuthorTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="Author" label="Author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="PublicationDate" source="publicationDate" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};