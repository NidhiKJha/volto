/**
 * ReferenceWidgetItem component.
 * @module components/manage/Widgets/ReferenceWidget
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header } from 'semantic-ui-react';

/**
 * ReferenceWidget Item class.
 * @class ReferenceWidgetItem
 * @extends
 */
const ReferenceWidgetItem = ({ data, onSelectFolder }) => (
  <Header>
    {data.title}
    <Header.Subheader>{data['@id']}</Header.Subheader>
    {data.is_folderish ? (
      <Button
        content=">"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          onSelectFolder(data);
        }}
      >
        {/* <Icon name="world" className="right floated" /> */}
      </Button>
    ) : null}
  </Header>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ReferenceWidgetItem.propTypes = {
  data: PropTypes.shape({
    '@id': PropTypes.string.isRequired,
    '@type': PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    is_folderish: PropTypes.bool.isRequired,
  }).isRequired,
  onSelectFolder: PropTypes.func.isRequired,
};

// export default injectIntl(ReferenceWidgetItem);
export default ReferenceWidgetItem;