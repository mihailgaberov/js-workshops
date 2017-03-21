import unittest
import list_manipulator

class TestListMethods(unittest.TestCase):

    def test_first_last6(self):
      self.assertEqual(list_manipulator.first_last6([1, 3, 6]), True)

    def test_same_first_last(self):
      self.assertEqual(list_manipulator.same_first_last([1, 2, 3]), False)
      self.assertEqual(list_manipulator.same_first_last([1, 2, 3, 1]), True)
      self.assertEqual(list_manipulator.same_first_last([1, 2, 1]), True)
      self.assertEqual(list_manipulator.same_first_last([]), False)

    def test_common_end(self):
      self.assertEqual(list_manipulator.common_end([1, 2, 3], [1, 33, 33]), True)
      self.assertEqual(list_manipulator.common_end([1, 2, 3], [2, 33, 33]), False)

    def test_sum3(self):
      self.assertEqual(list_manipulator.sum3([1, 2, 3]), 6)
      self.assertEqual(list_manipulator.sum3([1, 2, 32]), 35)

    def test_rotate_left3(self):
      self.assertEqual(list_manipulator.rotate_left3([1, 2, 3]), [2, 3, 1])
      self.assertEqual(list_manipulator.rotate_left3([1, 2, 32]), [2, 32, 1])

    def test_reverse3(self):
      self.assertEqual(list_manipulator.reverse3([1, 2, 3]), [3, 2, 1])
      self.assertEqual(list_manipulator.reverse3([1, 2, 32]), [32, 2, 1])

    def test_has23(self):
      self.assertEqual(list_manipulator.has23([12, 2]), True)
      self.assertEqual(list_manipulator.has23([12, 23]), False)
      self.assertEqual(list_manipulator.has23([3, 33]), True)

if __name__ == '__main__':
    unittest.main()