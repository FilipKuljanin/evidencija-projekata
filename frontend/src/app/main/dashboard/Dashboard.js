import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import DashboardContent from "./DashboardContent";
import { DateTimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

const Root = styled(FusePageSimple)(({theme}) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

const DashboardPage = (props) => {
  const {t} = useTranslation('dashboardPage');

  return (
    <Root
      content={
        <div className="p-24 w-full">
          <DashboardContent className="w-full"/>
        </div>
      }
      scroll="content"
    />
  );
}

export default DashboardPage;
