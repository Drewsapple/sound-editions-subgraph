import {
  Airdropped as AirdroppedEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BaseURISet as BaseURISetEvent,
  ConsecutiveTransfer as ConsecutiveTransferEvent,
  ContractURISet as ContractURISetEvent,
  ERC20Withdrawn as ERC20WithdrawnEvent,
  ETHWithdrawn as ETHWithdrawnEvent,
  EditionCutoffTimeSet as EditionCutoffTimeSetEvent,
  EditionMaxMintableRangeSet as EditionMaxMintableRangeSetEvent,
  FundingRecipientSet as FundingRecipientSetEvent,
  MetadataFrozen as MetadataFrozenEvent,
  MetadataModuleSet as MetadataModuleSetEvent,
  MintRandomnessEnabledSet as MintRandomnessEnabledSetEvent,
  Minted as MintedEvent,
  OperatorFilteringEnablededSet as OperatorFilteringEnablededSetEvent,
  OwnershipHandoverCanceled as OwnershipHandoverCanceledEvent,
  OwnershipHandoverRequested as OwnershipHandoverRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RolesUpdated as RolesUpdatedEvent,
  RoyaltySet as RoyaltySetEvent,
  SoundEditionInitialized as SoundEditionInitializedEvent,
  Transfer as TransferEvent
} from "../generated/SoundEditionV1_1/SoundEditionV1_1"
import {
  Airdropped,
  Approval,
  ApprovalForAll,
  BaseURISet,
  ConsecutiveTransfer,
  ContractURISet,
  ERC20Withdrawn,
  ETHWithdrawn,
  EditionCutoffTimeSet,
  EditionMaxMintableRangeSet,
  FundingRecipientSet,
  MetadataFrozen,
  MetadataModuleSet,
  MintRandomnessEnabledSet,
  Minted,
  OperatorFilteringEnablededSet,
  OwnershipHandoverCanceled,
  OwnershipHandoverRequested,
  OwnershipTransferred,
  RolesUpdated,
  RoyaltySet,
  SoundEditionInitialized,
  Transfer
} from "../generated/schema"
import { Address, Bytes } from "@graphprotocol/graph-ts"

export function handleAirdropped(event: AirdroppedEvent): void {
  let entity = new Airdropped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to.map<Bytes>((address: Address) => address as Bytes)
  entity.quantity = event.params.quantity
  entity.fromTokenId = event.params.fromTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBaseURISet(event: BaseURISetEvent): void {
  let entity = new BaseURISet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.baseURI = event.params.baseURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConsecutiveTransfer(
  event: ConsecutiveTransferEvent
): void {
  let entity = new ConsecutiveTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fromTokenId = event.params.fromTokenId
  entity.toTokenId = event.params.toTokenId
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractURISet(event: ContractURISetEvent): void {
  let entity = new ContractURISet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractURI = event.params.contractURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleERC20Withdrawn(event: ERC20WithdrawnEvent): void {
  let entity = new ERC20Withdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.tokens = event.params.tokens.map<Bytes>((address: Address) => address as Bytes)
  entity.amounts = event.params.amounts
  entity.caller = event.params.caller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleETHWithdrawn(event: ETHWithdrawnEvent): void {
  let entity = new ETHWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.caller = event.params.caller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEditionCutoffTimeSet(
  event: EditionCutoffTimeSetEvent
): void {
  let entity = new EditionCutoffTimeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.editionCutoffTime_ = event.params.editionCutoffTime_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEditionMaxMintableRangeSet(
  event: EditionMaxMintableRangeSetEvent
): void {
  let entity = new EditionMaxMintableRangeSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.editionMaxMintableLower_ = event.params.editionMaxMintableLower_
  entity.editionMaxMintableUpper_ = event.params.editionMaxMintableUpper_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundingRecipientSet(
  event: FundingRecipientSetEvent
): void {
  let entity = new FundingRecipientSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fundingRecipient = event.params.fundingRecipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMetadataFrozen(event: MetadataFrozenEvent): void {
  let entity = new MetadataFrozen(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.metadataModule = event.params.metadataModule
  entity.baseURI = event.params.baseURI
  entity.contractURI = event.params.contractURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMetadataModuleSet(event: MetadataModuleSetEvent): void {
  let entity = new MetadataModuleSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.metadataModule = event.params.metadataModule

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintRandomnessEnabledSet(
  event: MintRandomnessEnabledSetEvent
): void {
  let entity = new MintRandomnessEnabledSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mintRandomnessEnabled_ = event.params.mintRandomnessEnabled_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinted(event: MintedEvent): void {
  let entity = new Minted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.quantity = event.params.quantity
  entity.fromTokenId = event.params.fromTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOperatorFilteringEnablededSet(
  event: OperatorFilteringEnablededSetEvent
): void {
  let entity = new OperatorFilteringEnablededSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operatorFilteringEnabled_ = event.params.operatorFilteringEnabled_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipHandoverCanceled(
  event: OwnershipHandoverCanceledEvent
): void {
  let entity = new OwnershipHandoverCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pendingOwner = event.params.pendingOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipHandoverRequested(
  event: OwnershipHandoverRequestedEvent
): void {
  let entity = new OwnershipHandoverRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pendingOwner = event.params.pendingOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRolesUpdated(event: RolesUpdatedEvent): void {
  let entity = new RolesUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.roles = event.params.roles

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoyaltySet(event: RoyaltySetEvent): void {
  let entity = new RoyaltySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bps = event.params.bps

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSoundEditionInitialized(
  event: SoundEditionInitializedEvent
): void {
  let entity = new SoundEditionInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.edition_ = event.params.edition_
  entity.name_ = event.params.name_
  entity.symbol_ = event.params.symbol_
  entity.metadataModule_ = event.params.metadataModule_
  entity.baseURI_ = event.params.baseURI_
  entity.contractURI_ = event.params.contractURI_
  entity.fundingRecipient_ = event.params.fundingRecipient_
  entity.royaltyBPS_ = event.params.royaltyBPS_
  entity.editionMaxMintableLower_ = event.params.editionMaxMintableLower_
  entity.editionMaxMintableUpper_ = event.params.editionMaxMintableUpper_
  entity.editionCutoffTime_ = event.params.editionCutoffTime_
  entity.flags_ = event.params.flags_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
