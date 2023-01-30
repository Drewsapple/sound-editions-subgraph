import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  SoundCreatorV1OwnershipHandoverCanceled,
  SoundCreatorV1OwnershipHandoverRequested,
  SoundCreatorV1OwnershipTransferred,
  SoundCreatorV1RolesUpdated,
  SoundEditionCreated,
  SoundEditionImplementationSet
} from "../generated/SoundCreatorV1/SoundCreatorV1"

export function createSoundCreatorV1OwnershipHandoverCanceledEvent(
  pendingOwner: Address
): SoundCreatorV1OwnershipHandoverCanceled {
  let soundCreatorV1OwnershipHandoverCanceledEvent = changetype<
    SoundCreatorV1OwnershipHandoverCanceled
  >(newMockEvent())

  soundCreatorV1OwnershipHandoverCanceledEvent.parameters = new Array()

  soundCreatorV1OwnershipHandoverCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return soundCreatorV1OwnershipHandoverCanceledEvent
}

export function createSoundCreatorV1OwnershipHandoverRequestedEvent(
  pendingOwner: Address
): SoundCreatorV1OwnershipHandoverRequested {
  let soundCreatorV1OwnershipHandoverRequestedEvent = changetype<
    SoundCreatorV1OwnershipHandoverRequested
  >(newMockEvent())

  soundCreatorV1OwnershipHandoverRequestedEvent.parameters = new Array()

  soundCreatorV1OwnershipHandoverRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return soundCreatorV1OwnershipHandoverRequestedEvent
}

export function createSoundCreatorV1OwnershipTransferredEvent(
  oldOwner: Address,
  newOwner: Address
): SoundCreatorV1OwnershipTransferred {
  let soundCreatorV1OwnershipTransferredEvent = changetype<
    SoundCreatorV1OwnershipTransferred
  >(newMockEvent())

  soundCreatorV1OwnershipTransferredEvent.parameters = new Array()

  soundCreatorV1OwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  soundCreatorV1OwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return soundCreatorV1OwnershipTransferredEvent
}

export function createSoundCreatorV1RolesUpdatedEvent(
  user: Address,
  roles: BigInt
): SoundCreatorV1RolesUpdated {
  let soundCreatorV1RolesUpdatedEvent = changetype<SoundCreatorV1RolesUpdated>(
    newMockEvent()
  )

  soundCreatorV1RolesUpdatedEvent.parameters = new Array()

  soundCreatorV1RolesUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  soundCreatorV1RolesUpdatedEvent.parameters.push(
    new ethereum.EventParam("roles", ethereum.Value.fromUnsignedBigInt(roles))
  )

  return soundCreatorV1RolesUpdatedEvent
}

export function createSoundEditionCreatedEvent(
  soundEdition: Address,
  deployer: Address,
  initData: Bytes,
  contracts: Array<Address>,
  data: Array<Bytes>,
  results: Array<Bytes>
): SoundEditionCreated {
  let soundEditionCreatedEvent = changetype<SoundEditionCreated>(newMockEvent())

  soundEditionCreatedEvent.parameters = new Array()

  soundEditionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "soundEdition",
      ethereum.Value.fromAddress(soundEdition)
    )
  )
  soundEditionCreatedEvent.parameters.push(
    new ethereum.EventParam("deployer", ethereum.Value.fromAddress(deployer))
  )
  soundEditionCreatedEvent.parameters.push(
    new ethereum.EventParam("initData", ethereum.Value.fromBytes(initData))
  )
  soundEditionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "contracts",
      ethereum.Value.fromAddressArray(contracts)
    )
  )
  soundEditionCreatedEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytesArray(data))
  )
  soundEditionCreatedEvent.parameters.push(
    new ethereum.EventParam("results", ethereum.Value.fromBytesArray(results))
  )

  return soundEditionCreatedEvent
}

export function createSoundEditionImplementationSetEvent(
  newImplementation: Address
): SoundEditionImplementationSet {
  let soundEditionImplementationSetEvent = changetype<
    SoundEditionImplementationSet
  >(newMockEvent())

  soundEditionImplementationSetEvent.parameters = new Array()

  soundEditionImplementationSetEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return soundEditionImplementationSetEvent
}
