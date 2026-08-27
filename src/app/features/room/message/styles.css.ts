import { style } from '@vanilla-extract/css';
import { DefaultReset, color, config, toRem } from 'folds';

export const MessageBase = style({
  position: 'relative',
});
export const MessageBaseBubbleCollapsed = style({
  paddingTop: 0,
});

export const MessageOptionsBase = style([
  DefaultReset,
  {
    position: 'absolute',
    top: toRem(-30),
    right: 0,
    zIndex: 1,
  },
]);
export const MessageOptionsBar = style([
  DefaultReset,
  {
    padding: config.space.S100,
  },
]);

export const BubbleAvatarBase = style({
  paddingTop: 0,
});

export const MessageAvatar = style({
  cursor: 'pointer',
});

export const MessageQuickReaction = style({
  minWidth: toRem(32),
});

export const MessageMenuGroup = style({
  padding: config.space.S100,
});

export const MessageMenuItemText = style({
  flexGrow: 1,
});

export const ReactionsContainer = style({
  selectors: {
    '&:empty': {
      display: 'none',
    },
  },
});

export const ReactionsTooltipText = style({
  wordBreak: 'break-word',
});

export const ThreadGroup = style([
  DefaultReset,
  {
    display: 'flex',
    alignItems: 'stretch',
    paddingLeft: config.space.S400,
  },
]);

export const ThreadGroupLine = style([
  DefaultReset,
  {
    position: 'relative',
    flexShrink: 0,
    width: toRem(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: config.space.S100,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: color.SurfaceVariant.OnContainer,
    opacity: config.opacity.P300,

    selectors: {
      '&::after': {
        content: '',
        flexGrow: 1,
        width: toRem(4),
        marginTop: config.space.S100,
        borderRadius: config.radii.Pill,
        backgroundColor: color.SurfaceVariant.ContainerLine,
      },
      '&:hover': {
        opacity: config.opacity.P500,
      },
    },
  },
]);

export const ThreadGroupContent = style({
  flexGrow: 1,
  minWidth: 0,
});

export const ThreadGroupSummary = style([
  DefaultReset,
  {
    display: 'flex',
    alignItems: 'center',
    gap: config.space.S100,
    width: '100%',
    padding: `${config.space.S100} ${config.space.S200}`,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: 'inherit',
    textAlign: 'left',
  },
]);

export const ThreadGroupUnread = style({
  fontWeight: 600,
});
