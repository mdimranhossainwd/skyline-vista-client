import { Text } from "@radix-ui/themes";

export const Heading = ({ heading, description }) => {
  return (
    <>
      <div>
        <Text className="font-ubuntu leading-[44px] font-medium" size="9">
          {heading}
        </Text>
        <Text as="p" mb="5" size="3">
          {description}
        </Text>
      </div>
    </>
  );
};
