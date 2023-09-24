import { Datagrid, DateField, DeleteButton, EditButton, List, ReferenceField, ShowButton, TextField } from 'react-admin';

export const TaskList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="project_id" reference="projects" />
            <TextField source="title" />
            <TextField source="description" />
            <ReferenceField source="task_type_id" reference="task_types" />
            <DateField source="created_at" showTime={true} />
            <DateField source="started_at" showTime={true} />
            <DateField source="finished_at" showTime={true} />
            <>
                <ShowButton />
                <EditButton />
                <DeleteButton />
            </>
        </Datagrid>
    </List>
);