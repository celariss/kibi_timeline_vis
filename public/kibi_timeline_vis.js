import { CATEGORY } from 'ui/vis/vis_category';
import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { VisSchemasProvider } from 'ui/vis/editors/default/schemas';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';

import './kibi_timeline_vis.less';
import './kibi_timeline_vis_controller';
import optionsTemplate from './kibi_timeline_vis_params.html';
import template from './kibi_timeline_vis.html';

// register the provider with the visTypes registry
VisTypesRegistryProvider.register(KibiTimelineVisProvider);

function KibiTimelineVisProvider(Private) {
  const VisFactory = Private(VisFactoryProvider);
  const Schemas = Private(VisSchemasProvider);

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return VisFactory.createAngularVisualization({
    name: 'kibi_timeline',
    title: 'Kibi Timeline',
    icon: 'fak-timeline',
    category: CATEGORY.KIBI,
    description: 'Timeline widget for visualization of events',
    template,
    visConfig: {
      defaults: {
        //config: {
          // each group contains { id:_, groupLabel:_, startField:_, endField:_, size:_, orderBy:_ }
          groups: [{ id:1, groupLabel:'test', startField:'0' }],
          groupsOnSeparateLevels: false,
          selectValue: 'id',
          notifyDataErrors: false,
          syncTime: false
        //}
      },
      template: template
    },
    editorConfig: {
      optionsTemplate,
      // schemas: new Schemas([
      //   {
      //   },
      //   {
      //   }
      // ])
    },
    responseHandler: 'none',
    defaultSection: 'options',
    requiresSearch: false,
    requiresMultiSearch: true,
    requiresTimePicker: true,
    delegateSearch: true,
  });
}

// export the provider so that the visType can be required with Private()
export default KibiTimelineVisProvider;
