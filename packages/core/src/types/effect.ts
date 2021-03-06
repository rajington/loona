import {DocumentNode} from 'graphql';
import {MutationOptions} from 'apollo-client';
import {FetchResult} from 'apollo-link';

import {Context} from './common';
import {MutationObject} from './mutation';

export type EffectMethod = (
  action: Action | MutationAsAction,
  context: EffectContext,
) => void;

export interface ActionObject {
  type: string;
}

export type Action = ActionObject | MutationAsAction;

export interface MutationAsAction extends FetchResult<any> {
  type: string;
  options: MutationOptions;
  ok: boolean;
  error?: any;
}

export type EffectDef = string | DocumentNode | ActionObject | MutationObject;

export interface EffectContext extends Context {
  dispatch: (action: ActionObject | MutationObject) => void;
}
