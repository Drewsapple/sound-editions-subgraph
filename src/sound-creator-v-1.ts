import {
  SoundCreatorV1OwnershipHandoverCanceled as SoundCreatorV1OwnershipHandoverCanceledEvent,
  SoundCreatorV1OwnershipHandoverRequested as SoundCreatorV1OwnershipHandoverRequestedEvent,
  SoundCreatorV1OwnershipTransferred as SoundCreatorV1OwnershipTransferredEvent,
  SoundCreatorV1RolesUpdated as SoundCreatorV1RolesUpdatedEvent,
  SoundEditionCreated as SoundEditionCreatedEvent,
  SoundEditionImplementationSet as SoundEditionImplementationSetEvent
} from "../generated/SoundCreatorV1/SoundCreatorV1"
import {
  SoundCreatorV1OwnershipHandoverCanceled,
  SoundCreatorV1OwnershipHandoverRequested,
  SoundCreatorV1OwnershipTransferred,
  SoundCreatorV1RolesUpdated,
  SoundEditionCreated,
  SoundEditionImplementationSet
} from "../generated/schema"
import { Address, Bytes } from "@graphprotocol/graph-ts"

export function handleSoundCreatorV1OwnershipHandoverCanceled(
  event: SoundCreatorV1OwnershipHandoverCanceledEvent
): void {
  let entity = new SoundCreatorV1OwnershipHandoverCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pendingOwner = event.params.pendingOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSoundCreatorV1OwnershipHandoverRequested(
  event: SoundCreatorV1OwnershipHandoverRequestedEvent
): void {
  let entity = new SoundCreatorV1OwnershipHandoverRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pendingOwner = event.params.pendingOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSoundCreatorV1OwnershipTransferred(
  event: SoundCreatorV1OwnershipTransferredEvent
): void {
  let entity = new SoundCreatorV1OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSoundCreatorV1RolesUpdated(
  event: SoundCreatorV1RolesUpdatedEvent
): void {
  let entity = new SoundCreatorV1RolesUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.roles = event.params.roles

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSoundEditionCreated(
  event: SoundEditionCreatedEvent
): void {
  let entity = new SoundEditionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.soundEdition = event.params.soundEdition
  entity.deployer = event.params.deployer
  entity.initData = event.params.initData
  entity.contracts = event.params.contracts.map<Bytes>((address: Address) => address as Bytes)
  entity.data = event.params.data
  entity.results = event.params.results

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSoundEditionImplementationSet(
  event: SoundEditionImplementationSetEvent
): void {
  let entity = new SoundEditionImplementationSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newImplementation = event.params.newImplementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
