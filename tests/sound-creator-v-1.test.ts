import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { SoundCreatorV1OwnershipHandoverCanceled } from "../generated/schema"
import { SoundCreatorV1OwnershipHandoverCanceled as SoundCreatorV1OwnershipHandoverCanceledEvent } from "../generated/SoundCreatorV1/SoundCreatorV1"
import { handleSoundCreatorV1OwnershipHandoverCanceled } from "../src/sound-creator-v-1"
import { createSoundCreatorV1OwnershipHandoverCanceledEvent } from "./sound-creator-v-1-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let pendingOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newSoundCreatorV1OwnershipHandoverCanceledEvent = createSoundCreatorV1OwnershipHandoverCanceledEvent(
      pendingOwner
    )
    handleSoundCreatorV1OwnershipHandoverCanceled(
      newSoundCreatorV1OwnershipHandoverCanceledEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("SoundCreatorV1OwnershipHandoverCanceled created and stored", () => {
    assert.entityCount("SoundCreatorV1OwnershipHandoverCanceled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "SoundCreatorV1OwnershipHandoverCanceled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "pendingOwner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
