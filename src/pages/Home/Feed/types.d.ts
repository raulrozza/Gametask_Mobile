import { IFeedItem } from '../../../interfaces/api/FeedItem';
import { IThemedComponent } from '../../../interfaces/theme/ThemedComponent';

export interface FeedProps extends IThemedComponent {
  item: IFeedItem;
}
