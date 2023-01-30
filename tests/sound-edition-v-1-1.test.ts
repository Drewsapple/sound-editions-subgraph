import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Airdropped } from "../generated/schema"
import { Airdropped as AirdroppedEvent } from "../generated/SoundEditionV1_1/SoundEditionV1_1"
import { handleAirdropped } from "../src/sound-edition-v-1-1"
import { createAirdroppedEvent } from "./sound-edition-v-1-1-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let to = [Address.fromString("0x0000000000000000000000000000000000000001")]
    let quantity = BigInt.fromI32(234)
    let fromTokenId = BigInt.fromI32(234)
    let newAirdroppedEvent = createAirdroppedEvent(to, quantity, fromTokenId)
    handleAirdropped(newAirdroppedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Airdropped created and stored", () => {
    assert.entityCount("Airdropped", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Airdropped",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "to",
      "[0x0000000000000000000000000000000000000001]"
    )
    assert.fieldEquals(
      "Airdropped",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "quantity",
      "234"
    )
    assert.fieldEquals(
      "Airdropped",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fromTokenId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
