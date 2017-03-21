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

if __name__ == '__main__':
    unittest.main()