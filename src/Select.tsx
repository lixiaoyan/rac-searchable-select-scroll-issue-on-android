import {
  Autocomplete,
  Button,
  Input,
  ListBox,
  ListBoxItem,
  Popover,
  SearchField,
  Select,
  useFilter,
} from "react-aria-components";

const languages = Array.from({ length: 100 }).map((value, index) => ({
  id: index.toString(),
  name: index.toString(),
}));

export function SelectExample() {
  let { contains } = useFilter({ sensitivity: "base" });

  return (
    <Select>
      <Button className="w-40">Select</Button>
      <Popover
        className="w-(--trigger-width) overflow-auto rounded-sm border-1"
        shouldFlip={false}
      >
        <Autocomplete filter={contains}>
          <SearchField autoFocus>
            <Input />
          </SearchField>
          <ListBox items={languages}>
            {(item) => (
              <ListBoxItem textValue={item.name}>{item.name}</ListBoxItem>
            )}
          </ListBox>
        </Autocomplete>
      </Popover>
    </Select>
  );
}
