// import AnalyticsSection from '../AnalyticSections';
import ParkCong from "../../widgets/parking-congestion/ParkCong";
import NotificationChat from '../../widgets/chat-noti/NotificationChat'

import styleAP from './AnalyticsPage.module.css'
import ReportBlock from "../../widgets/report-block/ReportBlock";
import TableUsers from "../../widgets/table-user/TableUsers";


const AnalyticsPage = () => {
  return (
    <main className={styleAP.main}>
      <section>
        <ParkCong />
        <ReportBlock />
      </section>
      <section>
        <TableUsers />
      </section>

      <NotificationChat />
    </main>
  )
}

export default AnalyticsPage;