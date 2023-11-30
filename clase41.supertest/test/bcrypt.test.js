import { createHash, passwordValidation } from '../src/utils/index.js'
import chai from 'chai'

const expect = chai.expect

describe('Testear la utilidad de bcrypt', () => {
  const mockUser = {
    first_name: 'Mate',
    last_name: 'Naran',
    email: 'mate@naran.com',
    password: 'mate123',
  }

  it('Verificar el haseo efectivo, con contraseña diferente a la contraseña original', async function () {
    const result = await createHash(mockUser.password)

    expect(result).is.not.equal(mockUser.password)
  })
})
