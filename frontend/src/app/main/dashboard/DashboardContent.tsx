import { motion } from 'framer-motion';
import Paper from '@mui/material/Paper';

const DashboardContent = () => {

  return (
      <motion.div className='grid grid-cols-1 w-full' initial='hidden' animate='show'>
        <Paper className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 gap-y-14 p-24 shadow rounded-2xl overflow-hidden'>
          <h1>test test test</h1>
        </Paper>
      </motion.div>
  );
};

export default DashboardContent;
