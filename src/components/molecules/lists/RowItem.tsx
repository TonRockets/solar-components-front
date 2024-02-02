import styled from 'styled-components';

import { PhotovoltaicData } from '@/types/photovoltaic-component-data';
import EditationForm from '../../organisms/EditationForm';

interface RowItemProps {
   content: PhotovoltaicData;
   itemId?: number;
   isEdit: boolean;
}

const ItemWrapper = styled.li`
   padding: 3px;
   border-bottom: 1px solid #ddd;
`;

const RowItem: React.FC<RowItemProps> = ({ content, isEdit, itemId }) => {
   const handleDate = (date: string) => new Date(date).toLocaleDateString();

   return (
      <>
         {isEdit && itemId === content.id ? (
            <>
               <EditationForm content={content} handleDate={handleDate} />
            </>
         ) : (
            <>
               <ItemWrapper>Name: {content.name}</ItemWrapper>
               <ItemWrapper>Segment Type: {content.segmentType}</ItemWrapper>
               <ItemWrapper>Group: {content.group}</ItemWrapper>
               <ItemWrapper>Heigt: {content.height}</ItemWrapper>
               <ItemWrapper>Width: {content.width}</ItemWrapper>
               <ItemWrapper>Depth: {content.depth}</ItemWrapper>
               <ItemWrapper>
                  Gross wight: {content.grossWeight}
               </ItemWrapper>
               <ItemWrapper>
                  Net weight: {content.netWeight}
               </ItemWrapper>
            </>
         )}
      </>
   );
};

export default RowItem;
