import React, { ReactNode } from 'react';
import { Icon, Icons, Text } from 'folds';
import * as css from './styles.css';

type ThreadGroupProps = {
  open: boolean;
  onToggle: () => void;
  replyCount: number;
  unreadCount: number;
  lastSenderName: string;
  lastBody: string;
  children: ReactNode;
};

const SUMMARY_BODY_LENGTH = 20;

export function ThreadGroup({
  open,
  onToggle,
  replyCount,
  unreadCount,
  lastSenderName,
  lastBody,
  children,
}: ThreadGroupProps) {
  const label = `${replyCount} ${replyCount === 1 ? 'reply' : 'replies'}`;
  const preview =
    lastBody.length > SUMMARY_BODY_LENGTH
      ? `${lastBody.slice(0, SUMMARY_BODY_LENGTH)}...`
      : lastBody;

  return (
    <div className={css.ThreadGroup}>
      <button
        type="button"
        className={css.ThreadGroupLine}
        onClick={onToggle}
        aria-expanded={open}
        aria-label={open ? 'Collapse thread' : 'Expand thread'}
      >
        <Icon size="50" src={open ? Icons.ChevronTop : Icons.ChevronBottom} />
      </button>
      <div className={css.ThreadGroupContent}>
        {open ? (
          children
        ) : (
          <button type="button" className={css.ThreadGroupSummary} onClick={onToggle}>
            <Text size="T300" priority="300" truncate>
              <b>{label}</b>
              {unreadCount > 0 && (
                <span className={css.ThreadGroupUnread}>{` - ${unreadCount} unread`}</span>
              )}
              {' - '}
              <b>{lastSenderName}</b>
              {': '}
              {preview}
            </Text>
          </button>
        )}
      </div>
    </div>
  );
}
