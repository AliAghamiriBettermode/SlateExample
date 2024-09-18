import { Block, generateSlates } from '../models/slate/block-model.js'
import _ from 'lodash'
import { Interaction, InteractionResponse } from '../models/interaction/interaction.js'
import { IconNameProps } from '../enums/icon-name.js'

class InteractionController {
  static instance: InteractionController
  settingsBlocks = () => generateSlates(
    Block.container([
      Block.container([
        Block.container([
          Block.text([], { value: '####5103', align: 'center', size: 'lg', format: 'markdown' }),
          Block.text([], { value: 'Members', align: 'center', size: 'md' }),
        ], { size: 'md' }),
        Block.container([
          Block.text([], { value: '####5103', align: 'center', size: 'lg', format: 'markdown' }),
          Block.text([], { value: 'Members', align: 'center', size: 'md' }),
        ], { size: 'md' }),
        Block.container([
          Block.text([], { value: '####5103', align: 'center', size: 'lg', format: 'markdown' }),
          Block.text([], { value: 'Members', align: 'center', size: 'md' }),
        ], { size: 'md' }),
      ], {
        size: 'xl',
        direction: 'grid',
        alignment: 'center',
      }),
      Block.markdown([], { text: '#### Slate Kit' }),
      Block.card([
        Block.cardContent([
          Block.text([], { value: `Slate Kit is a robust framework that we offer to enable the display of complex UI components within the community platform.` }),
        ], { className: 'space-y-3' }),
      ], {}), // Introduction
      Block.markdown([], { text: '#### Accordion' }),
      Block.card([
        Block.accordion([], {
          title: 'Accordion', items: [
            {
              title: 'Accordion Item 1',
              description: 'Accordion Item 1: Default Open',
              defaultOpen: true,
            },
            {
              title: 'Accordion Item 2',
              description: 'Accordion Item 2: Default Closed',
              defaultOpen: false,
            },
          ],
        }),
      ], {}), // Accordion
      Block.markdown([], { text: '#### Alert' }),
      Block.card([
        Block.alert([], {
          title: 'Success Alert',
          status: 'success',
          align: 'center',
        }),
        Block.alert([], {
          title: 'Warning Alert',
          status: 'warning',
          align: 'leading',
        }),
        Block.alert([], {
          title: 'Primary Alert',
          status: 'primary',
          align: 'leading',
        }),
        Block.alert([], {
          title: 'Error Alert',
          status: 'error',
          align: 'leading',
        }),
        Block.alert([], {
          title: 'Info Alert',
          status: 'info',
          align: 'leading',
        }),
        Block.alert([], {
          title: 'Neutral Alert',
          status: 'neutral',
          align: 'leading',
        }),
      ], {}), // Alert
      Block.markdown([], { text: '#### Call to Action' }),
      Block.card([
        Block.callToAction([], {
          title: 'Call to Action 1',
          description: 'This is a call to action block that uses a button as an action.',
          action: {
            type: 'button',
            text: 'Button',
            href: 'https://bettermode.com',
            openInNewWindow: true,
          },
          alignment: 'center',
          // image: 'https://via.placeholder.com/150',
        }),
        Block.callToAction([], {
          title: 'Call to Action 2',
          description: 'This is a call to action block that uses a link as an action.',
          action: {
            type: 'link',
            text: 'Link',
            href: 'https://bettermode.com',
            openInNewWindow: true,
          },
          alignment: 'center',
          // image: 'https://via.placeholder.com/150',
        }),
      ], {}), // Call to Action
      Block.markdown([], { text: '#### Icons' }),
      Block.card([
        Block.container([
          Block.icon([], { size: 'xs', iconType: 'solid', color: 'primary', name: IconNameProps.ALERT_TRIANGLE }),
          Block.icon([], { size: 'sm', iconType: 'outline', color: 'attention', name: IconNameProps.CHECK_CIRCLE }),
          Block.icon([], { size: 'md', iconType: 'solid', color: 'highlight', name: IconNameProps.REFRESH_CW_HR }),
          Block.icon([], { size: 'lg', iconType: 'outline', color: 'negative', name: IconNameProps.SWITCH_HORIZONTAL }),
        ], { size: 'full', direction: 'grid', padding: 'md' }),
      ], {}), // Icons
      Block.markdown([], { text: '#### Iframe' }),
      Block.card([
        Block.container([
          Block.iframe([], {
            title: 'Bettermode Website',
            src: 'https://bettermode.com',
            height: 600,
          }),
        ], { padding: 'md' }),
      ], {}), // Iframe
      Block.markdown([], { text: '#### Image' }),
      Block.card([
        Block.container([
          Block.image([], {
            size: 'sm',
            url: 'https://via.placeholder.com/150',
            shape: 'circle',
          }),
          Block.image([], {
            size: 'md',
            url: 'https://via.placeholder.com/150',
            shape: 'square',
          }),
          Block.image([], {
            size: 'xl',
            url: 'https://via.placeholder.com/150',
            shape: 'rounded',
          }),
        ], { padding: 'md', direction: 'grid' }),
      ], {}), // Images
      Block.markdown([], { text: '#### Link' }),
      Block.card([
        Block.container([
          Block.link([
            Block.text([], { value: 'Primary link' }),
          ], {
            href: 'https://bettermode.com',
            variant: 'accent',
          }),
          Block.link([
            Block.text([], { value: 'Primary link: External' }),
          ], {
            href: 'https://bettermode.com',
            variant: 'accent',
            target: '_blank',
          }),
          Block.link([
            Block.text([], { value: 'Neutral link: External' }),
          ], {
            href: 'https://bettermode.com',
            variant: 'neutral',
            target: '_blank',
          }),
          Block.link([
            Block.text([], { value: 'Accent link: External' }),
          ], {
            href: 'https://bettermode.com',
            variant: 'accent',
            target: '_blank',
          }),
          Block.link([
            Block.text([], { value: 'Inherit link: External' }),
          ], {
            href: 'https://bettermode.com',
            variant: 'inherit',
            target: '_blank',
          }),
        ], {
          padding: 'md',
        }),
      ], {}), // Link
      Block.markdown([], { text: '#### Markdown' }),
      Block.card([
        Block.container([
          Block.markdown([], {
            text: '#### Header\n\nThis is a markdown block. You can use markdown syntax to format the text.\n\n- List item 1\n- List item 2\n- List item 3\n\n**Bold text**\n\n*Italic text*\n\n[Link](https://bettermode.com)',
          }),
        ], { padding: 'md' }),
      ], {}), // Markdown
      Block.markdown([], { text: '#### Rich Text' }),
      Block.card([
        Block.container([
          Block.richText([], {
            content: 'This is a rich text block. You can use rich text to format the text.',
            backgroundColor: '#e4c4e8',
            textColor: 'dark',
          }),
          Block.richText([], {
            content: 'This is a rich text block. You can use rich text to format the text.',
            backgroundColor: '#3f3940',
            textColor: 'light',
          }),
        ], {
          padding: 'md',
        }),
      ], {}), // Rich Text
      Block.markdown([], { text: '#### Button' }),
      Block.card([
        Block.container([
          Block.container([Block.button([Block.text([], { value: 'XS Rounded Primary' })], {
            variant: 'primary',
            size: 'sm',
            rounded: true,
          })], { size: 'md' }),
          Block.container([Block.button([Block.text([], { value: 'LG Plain' })], {
            variant: 'plain',
            size: 'lg',
            rounded: false,
          })], { size: 'md' }),
          Block.container([Block.button([Block.text([], { value: 'MD Disabled' })], {
            variant: 'primary',
            size: 'md',
            rounded: false,
            disabled: true,
          })], { size: 'md' }),
          Block.container([Block.button([Block.text([], { value: 'MD Secondary' })], {
            variant: 'secondary',
            size: 'md',
            rounded: false,
          })], { size: 'md' }),
          Block.container([Block.button([Block.text([], { value: 'XL Loading Secondary' })], {
            variant: 'secondary',
            size: 'xl',
            rounded: false,
            loading: true,
          })], { size: 'md' }),
        ], {
          padding: 'md',
          direction: 'grid',
          size: 'full',
        }),
      ], {}), // Button
      Block.markdown([], { text: '#### Card' }),
      Block.card([
        Block.cardHeader([], {
          title: 'Bordered Title (sm)',
          description: 'Bordered Description (sm)',
          withBorder: true,
          size: 'sm',
        }),
        Block.cardHeader([], {
          title: 'Borderless Title (md)',
          description: 'Borderless Description (md)',
          withBorder: false,
          size: 'md',
        }),
        Block.cardContent([Block.text([], { value: 'Test Content' })], {}),
        Block.cardFooter([Block.text([], { value: 'Bordered Footer' })], { withBorder: true }),
        Block.cardFooter([Block.text([], { value: 'Borderless Footer' })], { withBorder: false }),
      ], {}), // Card
      Block.markdown([], { text: '#### Divider' }),
      Block.card([
        Block.container([
          Block.text([], { value: 'Divider1' }),
          Block.divider([], { padding: 'md', position: 'center' }),
          Block.text([], { value: 'Divider2' }),
          Block.divider([], { padding: 'none', position: 'trailing' }),
          Block.text([], { value: 'Divider3' }),
        ], { padding: 'md' }),
      ], {}), // Divider
      Block.markdown([], { text: '#### Text' }),
      Block.card([
        Block.container([
          Block.text([], { value: 'Plain xs leading text', size: 'xs', align: 'leading', format: 'plain' }),
          Block.divider([], {}),
          Block.text([], { value: 'Markdown sm center text', size: 'sm', align: 'center', format: 'markdown' }),
          Block.divider([], {}),
          Block.text([], { value: 'Markdown md trailing text', size: 'md', align: 'trailing', format: 'markdown' }),
          Block.divider([], {}),
          Block.text([], { value: '#### MD Title', size: '2xl', align: 'leading', format: 'markdown' }),
        ], { padding: 'md' }),
      ], {}), // Text
      Block.markdown([], { text: '#### Textarea' }),
      Block.card([
        Block.container([
          Block.textarea([], {
            value: 'This is a textarea block. You can use this block to input multiple lines of text.',
            placeholder: 'Placeholder',
            label: 'Default Textarea',
            helperText: 'Helper text',
          }),
          Block.divider([], {}),
          Block.textarea([], {
            value: 'This is a textarea block. You can use this block to input multiple lines of text.',
            placeholder: 'Placeholder',
            label: 'Hidden Textarea',
            helperText: 'Helper text',
            hidden: true,
          }),
          Block.divider([], {}),
          Block.textarea([], {
            value: 'This is a textarea block. You can use this block to input multiple lines of text.',
            placeholder: 'Placeholder',
            label: 'Invalid Textarea',
            helperText: 'Helper text',
            invalid: true,
          }),
          Block.divider([], {}),
          Block.textarea([], {
            value: 'This is a textarea block. You can use this block to input multiple lines of text.',
            placeholder: 'Placeholder',
            label: 'Required Textarea',
            helperText: 'Helper text',
            required: true,
          }),
        ], { padding: 'md' }),
      ], {}), // Textarea
      Block.markdown([], { text: '#### Toggle' }),
      Block.card([
        Block.container([
          Block.toggle([], {
            name: 'toggle-input',
            title: 'Title',
            size: 'compact',
            placeholder: 'Placeholder',
            label: 'Default (sm)',
            description: 'Description',
          }),
          Block.toggle([], {
            name: 'toggle-input',
            title: 'Title',
            size: 'compact',
            placeholder: 'Placeholder',
            label: 'Default (md)',
            description: 'Description',
          }),
          Block.toggle([], {
            name: 'toggle-input',
            title: 'Title',
            size: 'default',
            placeholder: 'Placeholder',
            label: 'Invalid',
            description: 'Description',
            invalid: true,
          }),
          Block.toggle([], {
            name: 'toggle-input',
            title: 'Title',
            size: 'default',
            placeholder: 'Placeholder',
            label: 'Checked',
            description: 'Description',
            checked: true,
          }),
          Block.toggle([], {
            name: 'toggle-input',
            title: 'Title',
            size: 'default',
            placeholder: 'Placeholder',
            label: 'Required',
            description: 'Description',
            required: true,
          }),
        ], { padding: 'md' }),
      ], {}), // Toggle
      Block.markdown([], { text: '#### Select' }),
      Block.card([
        Block.container([
          Block.select([], {
            value: 'option-1',
            label: 'Default',
            name: 'Name',
            items: [
              {
                text: 'Option 1', value: 'option-1',
              },
              {
                text: 'Option 2', value: 'option-2',
              },
              {
                text: 'Option 3', value: 'option-3',
              },
              {
                text: 'Option 4', value: 'option-4',
              },
            ],
          }),
          Block.select([], {
            value: 'option-1',
            label: '2xl avatar',
            name: 'Name',
            avatarSize: '2xl',
            items: [
              {
                text: 'Option 1', value: 'option-1',
              },
              {
                text: 'Option 2', value: 'option-2',
              },
              {
                text: 'Option 3', value: 'option-3',
              },
              {
                text: 'Option 4', value: 'option-4',
              },
            ],
          }),
          Block.select([], {
            value: 'option-1',
            label: 'Full avatar',
            name: 'Name',
            avatarRounded: 'sm',
            items: [
              {
                text: 'Option 1', value: 'option-1',
              },
              {
                text: 'Option 2', value: 'option-2',
              },
              {
                text: 'Option 3', value: 'option-3',
              },
              {
                text: 'Option 4', value: 'option-4',
              },
            ],
          }),
        ], {
          padding: 'md',
        }),
      ], {}), // Select
      Block.markdown([], { text: '#### Input' }),
      Block.card([
        Block.container([
          Block.input([], {
            name: 'input-1',
            label: 'Default Input',
            placeholder: 'Placeholder',
            helperText: 'Helper text',
          }),
          Block.input([], {
            name: 'input-2',
            label: 'Invalid Input',
            placeholder: 'Placeholder',
            helperText: 'Helper text',
            invalid: true,
          }),
          Block.input([], {
            name: 'input-3',
            label: 'Readonly Input',
            placeholder: 'Placeholder',
            helperText: 'Helper text',
            readonly: true,
          }),
          Block.input([], {
            name: 'input-4',
            label: 'Input with value',
            placeholder: 'Placeholder',
            helperText: 'Helper text',
            value: 'Value',
          }),
          Block.input([], {
            name: 'input-5',
            label: 'Errored Input',
            placeholder: 'Placeholder',
            helperText: 'Helper text',
            error: 'Error message',
          }),
          Block.input([], {
            name: 'input-6',
            label: 'Input with Copy',
            placeholder: 'Placeholder',
            helperText: 'Helper text',
            copy: true,
          }),
        ], {
          padding: 'md',
        }),
      ], {}), // Input
      Block.markdown([], { text: '#### <s>Add To Calendar Button</s>' }),
      Block.card([
        Block.container([
          Block.addToCalendarButtonProps([], {
            event: {
              title: 'Title',
              start: new Date().toISOString(),
              end: new Date().toISOString(),
            },
          }),
        ], { padding: 'md' }),
      ], {}), // Add To Calendar Button
      Block.markdown([], { text: '#### <s>Announcement</s>' }),
      Block.card([
        Block.container([
          Block.announcement([], {
            title: 'Title',
            align: 'center',
            viewStyle: 'vibrant',
            actionText: 'Action Text',
            actionUrl: 'https://bettermode.com',
            description: 'Description',
          }),
        ], { padding: 'md' }),
      ], {}), // Announcement
      Block.markdown([], { text: '#### <s>Announcement Banner</s>' }),
      Block.card([
        Block.container([
          Block.announcementBanner([], {
            title: 'Title',
            rounded: true,
            style: 'warning',
            url: 'https://bettermode.com',
          }),
        ], { padding: 'md' }),
      ], {}), // Announcement Banner
      Block.markdown([], { text: '#### <s>Hero Banner</s>' }),
      Block.card([
        Block.container([
          Block.heroBanner([], {
            layout: 'imageFull',
            contentSpacing: 0,
            mediaAspectRatio: 0,
            eyebrow: 'Eye Brow',
            heading: 'Heading',
            description: 'Description',
            textColor: 'dark',
            textAlignment: 'center',
            mediaType: 'image',
            mediaTint: 0,
            backgroundColor: '',
            actionType: 'button',
            buttonActions: [],
            searchAction: {
              searchFor: 'all',
              placeholder: undefined,
              searchSource: 'allSpaces',
              spaceIds: undefined,
            },
          }),
        ], { padding: 'md' }),
      ], {}), // Hero Banner
      Block.markdown([], { text: '#### <s>Link Menu</s>' }),
      Block.card([
        Block.container([
          Block.linkMenu([], {
            title: 'Title',
            items: [
              {
                text: 'Item 1',
                href: 'https://bettermode.com',
                openInNewWindow: true,
              },
              {
                text: 'Item 2',
                href: 'https://bettermode.com',
                openInNewWindow: true,
              },
            ],
          }),
        ], { padding: 'md' }),
      ], {}), // Link Menu
    ], {}),
  )


  handleSettingsInteraction(body: any): InteractionResponse {
    const { interactionId, appId, callbackId } = body.data
    const settingsInteraction: Interaction = Interaction.show({
      id: interactionId,
      slate: {
        rootBlock: 'root',
        blocks: [
          ...this.settingsBlocks(),
        ],
      },
      props: {},
    })
    const interactions: Interaction<any>[] = []
    switch (callbackId) {
      default:
        interactions.push(settingsInteraction)
        break
    }

    return {
      type: 'INTERACTION',
      status: 'SUCCEEDED',
      data: {
        appId,
        interactionId,
        interactions: _.compact(interactions),
      },
    }
  }

  static getInstance() {
    if (!InteractionController.instance) {
      InteractionController.instance = new InteractionController()
    }
    return InteractionController.instance
  }
}

export default InteractionController