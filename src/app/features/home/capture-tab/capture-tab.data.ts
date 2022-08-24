/* eslint-disable @typescript-eslint/naming-convention */
export interface PaginatedResponse<T> {
  readonly count: number;
  readonly previous: string | null | undefined;
  readonly next: string | null | undefined;
  readonly results: T[];
}

export interface DiaBackendAsset {
  readonly id: string;
  readonly uuid: string;
  readonly cid: string;
  readonly proof_hash: string;
  readonly is_original_owner: boolean;
  readonly owner: string;
  readonly owner_name: string;
  readonly asset_file: string;
  readonly asset_file_thumbnail: string;
  readonly asset_file_mime_type: any;
  readonly information: Partial<any>;
  readonly signature: any[];
  readonly signed_metadata: string;
  readonly sharable_copy: string;
  readonly source_transaction: any | null;
  readonly parsed_meta: any;
  readonly creator_name: string;
  readonly supporting_file: string | null;
  readonly source_type: 'original' | 'post_capture' | 'store';
  readonly cai_file: string;
  readonly nft_token_id: string | null;
  readonly nft_token_uri: string;
  readonly nft_blockchain_name: string;
  readonly nft_contract_address: string;
  readonly caption: string;
  readonly post_creation_workflow_id: string;
  readonly mint_workflow_id: string;
}
