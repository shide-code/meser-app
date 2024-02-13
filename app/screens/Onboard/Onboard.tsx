import { Button, Column, Typography } from "@/components";
import { spacing } from "@/themes";
import { ScrollView, View } from "react-native";

export const OnboardScreen = () => {
  return (
    <ScrollView>
      <Column padding={spacing.medium}>
        <Typography variant="heading1" weight="bold">
          Onboard
        </Typography>
        <Typography variant="heading2" weight="500">
          Onboard
        </Typography>
        <Typography variant="heading3" weight="400">
          Onboard
        </Typography>
        <Typography variant="heading4">Onboard</Typography>
        <Typography variant="heading5">Onboard</Typography>
        <Typography variant="body1">Onboard</Typography>
        <Typography variant="body2">Onboard</Typography>

        <View style={{ height: 24 }} />
        <Button typeButton="filled" theme="accent" rounded="full">
          Click Me
        </Button>
        <View style={{ height: 24 }} />
        <Button typeButton="filled" theme="informative" rounded="md">
          Click Me
        </Button>
        <View style={{ height: 24 }} />
        <Button typeButton="filled" theme="negative" rounded="lg">
          Click Me
        </Button>
        <View style={{ height: 24 }} />
        <Button typeButton="filled" theme="notice" rounded="sm">
          Click Me
        </Button>
        <View style={{ height: 24 }} />
        <Button typeButton="filled" theme="positive" rounded="none">
          Click Me
        </Button>

        <View style={{ height: 24 }} />
        <Button typeButton="outlined" theme="accent" rounded="full">
          Click Me
        </Button>
        <View style={{ height: 24 }} />
        <Button typeButton="outlined" theme="informative" rounded="md">
          Click Me
        </Button>
        <View style={{ height: 24 }} />
        <Button typeButton="outlined" theme="negative" rounded="lg">
          Click Me
        </Button>
        <View style={{ height: 24 }} />
        <Button typeButton="outlined" theme="notice" rounded="sm">
          Click Me
        </Button>
        <View style={{ height: 24 }} />
        <Button typeButton="outlined" theme="positive" rounded="none">
          Click Me
        </Button>
      </Column>
    </ScrollView>
  );
};
